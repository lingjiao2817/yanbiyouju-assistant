<template>
  <div class="recommend-page">
    <div class="container">
      <div class="flex" style="gap: 24px; align-items: flex-start;">
        <div class="card" style="flex: 1;">
          <h2 style="font-size: 18px; margin-bottom: 16px;">文献检索</h2>
          <textarea 
            v-model="queryText" 
            class="recommend-input"
            rows="6"
            placeholder="粘贴文本或输入关键词，系统将推荐相关学术文献..."
          />
          <button class="btn-primary" style="margin-top: 16px; width: 100%;" @click="searchPapers" :disabled="loading">
            {{ loading ? "搜索中..." : "推荐文献" }}
          </button>
        </div>

        <div class="card" style="flex: 1.5;">
          <h2 style="font-size: 18px; margin-bottom: 16px;">文献推荐</h2>
          <div v-if="loading" class="flex-center" style="padding: 40px;">
            <span class="spinner"></span>
            <span style="margin-left: 12px;">搜索中...</span>
          </div>
          <div v-else-if="papers.length === 0" class="empty-state">
            暂无文献推荐，请输入文本或关键词
          </div>
          <div v-else class="papers-list">
            <div v-for="(paper, idx) in papers" :key="idx" class="paper-item">
              <div class="paper-title">{{ paper.title }}</div>
              <div class="paper-meta">{{ paper.authors }} · {{ paper.year }} · 被引 {{ paper.citations }} 次</div>
              <a v-if="paper.url" :href="paper.url" target="_blank" class="paper-link">查看原文 →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import axios from 'axios'

const queryText = ref("")
const papers = ref([])
const loading = ref(false)

const searchPapers = async () => {
  if (!queryText.value.trim()) {
    alert("请输入文本或关键词")
    return
  }
  loading.value = true
  try {
    const response = await axios.post('/api/recommend/papers', {
      query: queryText.value
    })
    papers.value = response.data.papers || []
  } catch (err) {
    console.error("获取文献推荐失败", err)
    alert(err.response?.data?.message || "获取文献推荐失败，请稍后重试")
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.recommend-page {
  min-height: calc(100vh - 76px);
  background: linear-gradient(180deg, #faf7ff 0%, #f6f2ff 100%);
  padding: 32px 0 48px;
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.card {
  background: rgba(255, 255, 255, 0.88);
  border-radius: 24px;
  padding: 24px;
  border: 1px solid rgba(109, 40, 217, 0.1);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
}

.flex {
  display: flex;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  padding: 0 22px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #7c3aed, #5b21b6);
  border: none;
  cursor: pointer;
}

.recommend-input {
  width: 100%;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 12px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
}

.recommend-input:focus {
  outline: none;
  border-color: #6d28d9;
  box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.1);
}

.papers-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.paper-item {
  padding: 12px;
  background: #f8fafc;
  border-radius: 12px;
}

.paper-title {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 6px;
  color: #1e293b;
}

.paper-meta {
  font-size: 12px;
  color: #64748b;
  margin-bottom: 8px;
}

.paper-link {
  font-size: 12px;
  color: #6d28d9;
  text-decoration: none;
}

.empty-state {
  text-align: center;
  padding: 48px;
  color: #94a3b8;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #e2e8f0;
  border-top-color: #6d28d9;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>