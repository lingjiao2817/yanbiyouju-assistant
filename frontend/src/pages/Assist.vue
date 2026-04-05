<template>
  <div class="assist-page">
    <div class="container">
      <div class="flex" style="gap: 24px; align-items: flex-start;">
        <div class="card" style="flex: 1;">
          <h2 style="font-size: 18px; margin-bottom: 16px;">AI写作辅助</h2>
          <textarea 
            v-model="inputText" 
            class="assist-input"
            rows="8"
            placeholder="输入需要润色或改写的文本..."
          />
          <div class="flex" style="gap: 12px; margin-top: 16px;">
            <select v-model="style" class="style-select">
              <option value="academic">学术风格</option>
              <option value="professional">专业风格</option>
              <option value="simple">简洁风格</option>
            </select>
            <button class="btn-primary" style="flex: 1;" @click="generateSuggestion" :disabled="loading">
              {{ loading ? "生成中..." : "生成建议" }}
            </button>
          </div>
        </div>

        <div class="card" style="flex: 1.5;">
          <h2 style="font-size: 18px; margin-bottom: 16px;">改写建议</h2>
          <div v-if="loading" class="flex-center" style="padding: 40px;">
            <span class="spinner"></span>
            <span style="margin-left: 12px;">生成中...</span>
          </div>
          <div v-else-if="!suggestion" class="empty-state">
            暂无建议，请输入文本并点击生成
          </div>
          <div v-else class="suggestion-content">
            <div class="suggestion-box">
              <p class="suggestion-text">{{ suggestion }}</p>
            </div>
            <button class="btn-outline" style="margin-top: 16px; width: 100%;" @click="copyText">
              复制建议
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import axios from 'axios'

const inputText = ref("")
const style = ref("academic")
const suggestion = ref("")
const loading = ref(false)

const generateSuggestion = async () => {
  if (!inputText.value.trim()) {
    alert("请输入文本内容")
    return
  }
  loading.value = true
  try {
    const response = await axios.post('/api/assist/rewrite', {
      text: inputText.value,
      style: style.value
    })
    suggestion.value = response.data.suggestion
  } catch (err) {
    console.error("获取改写建议失败", err)
    alert(err.response?.data?.message || "获取改写建议失败，请稍后重试")
  } finally {
    loading.value = false
  }
}

const copyText = () => {
  if (suggestion.value) {
    navigator.clipboard.writeText(suggestion.value)
    alert("已复制到剪贴板")
  }
}
</script>

<style scoped>
.assist-page {
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

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  padding: 0 22px;
  border-radius: 999px;
  font-weight: 700;
  background: transparent;
  border: 1px solid rgba(109, 40, 217, 0.3);
  color: #6d28d9;
  cursor: pointer;
}

.assist-input {
  width: 100%;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 12px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
}

.assist-input:focus {
  outline: none;
  border-color: #6d28d9;
  box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.1);
}

.style-select {
  padding: 10px 16px;
  border-radius: 40px;
  border: 1px solid #e2e8f0;
  background: white;
  font-size: 14px;
  outline: none;
}

.suggestion-content {
  background: #f8fafc;
  border-radius: 16px;
  padding: 16px;
}

.suggestion-text {
  line-height: 1.6;
  color: #334155;
  font-size: 14px;
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