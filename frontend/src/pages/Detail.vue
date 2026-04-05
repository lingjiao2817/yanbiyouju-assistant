<template>
  <div class="detail-page">
    <div class="container">
      <div class="detail-card">
        <div class="detail-header">
          <button class="back-btn" @click="goBack">← 返回</button>
          <h1>检测详情</h1>
          <div style="width: 60px;"></div>
        </div>

        <div v-if="loading" class="flex-center" style="padding: 60px;">
          <span class="spinner"></span>
          <p style="margin-top: 16px;">加载中...</p>
        </div>

        <div v-else-if="record" class="detail-content">
          <div class="detail-section">
            <h3 class="section-title">基本信息</h3>
            <div class="info-grid">
              <div class="info-row">
                <span class="info-label">标题：</span>
                <span class="info-value">{{ record.title }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">检测时间：</span>
                <span class="info-value">{{ record.date }}</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <h3 class="section-title">原文内容</h3>
            <div class="content-box">
              {{ record.content }}
            </div>
          </div>

          <div class="detail-section">
            <h3 class="section-title">风险等级</h3>
            <span :class="['risk-badge', record.risk === '高' ? 'high' : record.risk === '中' ? 'medium' : 'low']">
              {{ record.risk }}风险
            </span>
          </div>

          <div class="detail-section">
            <h3 class="section-title">问题分析</h3>
            <ul class="issue-list">
              <li v-for="(issue, idx) in record.issues" :key="idx">{{ issue }}</li>
            </ul>
          </div>

          <div class="detail-section">
            <h3 class="section-title">改写建议</h3>
            <ul class="suggestion-list">
              <li v-for="(s, idx) in record.suggestions" :key="idx">{{ s }}</li>
            </ul>
          </div>
        </div>

        <div v-else class="empty-state">
          未找到该检测记录
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()
const id = route.params.id
const record = ref(null)
const loading = ref(false)

const loadDetail = async () => {
  loading.value = true
  try {
    const response = await axios.get(`/api/checks/${id}`)
    const data = response.data
    record.value = {
      title: data.title,
      date: data.created_at ? data.created_at.slice(0, 10) : '',
      content: data.input_text || '无内容',
      risk: data.result?.overview?.risk_level === 'high' ? '高' 
            : data.result?.overview?.risk_level === 'medium' ? '中' : '低',
      issues: data.result?.paragraphs?.[0]?.reasons || ['暂无详细分析'],
      suggestions: data.result?.paragraphs?.[0]?.suggestion?.actions || ['暂无建议']
    }
  } catch (err) {
    console.error("加载详情失败", err)
    record.value = null
  } finally {
    loading.value = false
  }
}

const goBack = () => {
  router.push('/history')
}

onMounted(() => {
  loadDetail()
})
</script>

<style scoped>
.detail-page {
  min-height: calc(100vh - 76px);
  background: linear-gradient(180deg, #faf7ff 0%, #f6f2ff 100%);
  padding: 32px 0 48px;
}

.container {
  width: min(1000px, calc(100% - 32px));
  margin: 0 auto;
}

.detail-card {
  background: rgba(255, 255, 255, 0.88);
  border-radius: 28px;
  padding: 32px;
  border: 1px solid rgba(109, 40, 217, 0.1);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(109, 40, 217, 0.1);
}

.back-btn {
  background: rgba(109, 40, 217, 0.08);
  border: none;
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
  font-weight: 500;
}

.back-btn:hover {
  background: rgba(109, 40, 217, 0.15);
}

.detail-header h1 {
  font-size: 24px;
  color: #1e1b4b;
  margin: 0;
}

.detail-section {
  margin-bottom: 28px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #6d28d9;
  margin-bottom: 12px;
  padding-left: 10px;
  border-left: 3px solid #6d28d9;
}

.info-grid {
  background: rgba(109, 40, 217, 0.04);
  border-radius: 16px;
  padding: 16px;
}

.info-row {
  display: flex;
  padding: 8px 0;
}

.info-label {
  width: 100px;
  color: #64748b;
  font-size: 14px;
}

.info-value {
  color: #1e293b;
  font-size: 14px;
}

.content-box {
  background: rgba(109, 40, 217, 0.04);
  padding: 16px;
  border-radius: 16px;
  line-height: 1.6;
  font-size: 14px;
  color: #334155;
}

.risk-badge {
  display: inline-block;
  padding: 6px 20px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
}

.risk-badge.high {
  background: #fee2e2;
  color: #b91c1c;
}

.risk-badge.medium {
  background: #ffedd5;
  color: #b45309;
}

.risk-badge.low {
  background: #dcfce7;
  color: #15803d;
}

.issue-list, .suggestion-list {
  padding-left: 24px;
  margin: 0;
}

.issue-list li, .suggestion-list li {
  margin: 8px 0;
  line-height: 1.5;
  color: #334155;
}

.suggestion-list li {
  color: #6d28d9;
}

.empty-state {
  text-align: center;
  padding: 48px;
  color: #94a3b8;
}

.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid rgba(109, 40, 217, 0.2);
  border-top-color: #6d28d9;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>