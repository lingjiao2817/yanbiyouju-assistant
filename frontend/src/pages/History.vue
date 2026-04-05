<template>
  <div class="history-page">
    <div class="container">
      <div class="page-head">
        <div>
          <p class="page-badge">检测记录</p>
          <h1>历史检测记录</h1>
          <p class="page-desc">查看检测历史，按风险等级筛选，并进入详情页继续分析。</p>
        </div>

        <div class="filter-group">
          <button
            v-for="item in filters"
            :key="item.value"
            class="filter-btn"
            :class="{ active: activeFilter === item.value }"
            @click="activeFilter = item.value"
          >
            {{ item.label }}
          </button>
        </div>
      </div>

      <div v-if="loading" class="state-card">正在加载检测记录...</div>
      <div v-else-if="error" class="state-card error">{{ error }}</div>
      <div v-else-if="filteredItems.length === 0" class="state-card">暂无检测记录</div>

      <div v-else class="record-list">
        <div
          v-for="item in filteredItems"
          :key="item.id"
          class="record-card"
          @click="goDetail(item.id)"
        >
          <div class="record-main">
            <h3>{{ item.title || '未命名记录' }}</h3>
            <p>{{ formatDate(item.created_at) }}</p>
          </div>

          <div class="record-side">
            <span class="risk-tag" :class="riskClass(item.overall_risk)">
              {{ riskText(item.overall_risk) }}
            </span>
            <span class="detail-link">查看详情 →</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const loading = ref(false)
const error = ref('')
const items = ref([])

const activeFilter = ref('all')

const filters = [
  { label: '全部', value: 'all' },
  { label: '高风险', value: 'high' },
  { label: '中风险', value: 'medium' },
  { label: '低风险', value: 'low' }
]

const mockData = [
  {
    id: 1,
    title: '论文引言初稿检测',
    overall_risk: 'high',
    created_at: '2026-04-05T09:30:00'
  },
  {
    id: 2,
    title: '课程报告摘要检测',
    overall_risk: 'medium',
    created_at: '2026-04-04T14:20:00'
  },
  {
    id: 3,
    title: '自媒体文章草稿检测',
    overall_risk: 'low',
    created_at: '2026-04-03T19:10:00'
  }
]

const filteredItems = computed(() => {
  if (activeFilter.value === 'all') return items.value
  return items.value.filter(item => item.overall_risk === activeFilter.value)
})

function riskText(risk) {
  if (risk === 'high') return '高风险'
  if (risk === 'medium') return '中风险'
  if (risk === 'low') return '低风险'
  return '未知'
}

function riskClass(risk) {
  if (risk === 'high') return 'high'
  if (risk === 'medium') return 'medium'
  if (risk === 'low') return 'low'
  return ''
}

function formatDate(value) {
  if (!value) return '未知时间'
  const date = new Date(value)
  if (isNaN(date.getTime())) return value
  return date.toLocaleString('zh-CN')
}

function goDetail(id) {
  router.push(`/history/${id}`)
}

async function fetchHistory() {
  loading.value = true
  error.value = ''

  try {
    const { data } = await axios.get('/api/checks')
    items.value = Array.isArray(data?.items) ? data.items : mockData
  } catch (err) {
    console.error('加载历史记录失败，使用模拟数据', err)
    items.value = mockData
    error.value = ''
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchHistory()
})
</script>

<style scoped>
.history-page {
  min-height: calc(100vh - 76px);
  background: linear-gradient(180deg, #faf7ff 0%, #f6f2ff 100%);
  padding: 32px 0 48px;
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.page-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.page-badge {
  margin: 0 0 10px;
  color: #6d28d9;
  font-size: 13px;
  font-weight: 700;
}

.page-head h1 {
  margin: 0 0 10px;
  font-size: 34px;
  color: #1e1b4b;
}

.page-desc {
  margin: 0;
  color: #64748b;
  line-height: 1.8;
}

.filter-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-btn {
  border: none;
  background: #ffffff;
  color: #475569;
  padding: 10px 16px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  border: 1px solid rgba(109, 40, 217, 0.12);
}

.filter-btn.active {
  background: #6d28d9;
  color: #fff;
}

.state-card {
  padding: 28px;
  border-radius: 20px;
  background: #fff;
  color: #475569;
  border: 1px solid rgba(109, 40, 217, 0.1);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.05);
}

.state-card.error {
  color: #b91c1c;
  background: #fff7f7;
}

.record-list {
  display: grid;
  gap: 16px;
}

.record-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  padding: 22px 24px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(109, 40, 217, 0.1);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.record-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 44px rgba(15, 23, 42, 0.09);
}

.record-main h3 {
  margin: 0 0 8px;
  color: #1e1b4b;
  font-size: 18px;
}

.record-main p {
  margin: 0;
  color: #64748b;
  font-size: 14px;
}

.record-side {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.risk-tag {
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
}

.risk-tag.high {
  background: #fee2e2;
  color: #b91c1c;
}

.risk-tag.medium {
  background: #ffedd5;
  color: #b45309;
}

.risk-tag.low {
  background: #dcfce7;
  color: #15803d;
}

.detail-link {
  color: #6d28d9;
  font-weight: 700;
  font-size: 14px;
}

@media (max-width: 700px) {
  .container {
    width: min(100% - 24px, 1200px);
  }

  .page-head h1 {
    font-size: 28px;
  }

  .record-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>