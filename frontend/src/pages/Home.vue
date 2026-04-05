<template>
  <div class="home-page">
    <!-- 首屏 Hero -->
    <section class="hero container">
      <div class="hero-left">
        <div class="hero-badge">
          <span class="dot"></span>
          人文社科方向 · 学术诚信工具 Demo
        </div>

        <h2 class="hero-title">
          让每一段表述，<br />
          <span>都经得起追问</span>
        </h2>

        <p class="hero-subtitle">
          大学生课程论文 / 作业 AI 查证助手
        </p>

        <p class="hero-desc">
          自动识别 AI 生成内容中疑似编造的文献、数据、法条与观点来源，
          提供可信度提示、真实文献推荐与写作建议，让作业更可信、更规范。
        </p>

        <div class="hero-actions">
          <router-link to="/detect" class="btn btn-primary btn-large">开始查证</router-link>
          <router-link to="/recommend" class="btn btn-secondary btn-large">查看文献推荐</router-link>
        </div>

        <div class="hero-tags">
          <span class="tag">疑似虚构引用识别</span>
          <span class="tag">文献来源核查</span>
          <span class="tag">写作建议辅助</span>
          <span class="tag">历史记录管理</span>
        </div>

        <div class="hero-stats">
          <div class="stat-card">
            <strong>8项</strong>
            <span>检测维度</span>
          </div>
          <div class="stat-card">
            <strong>6页</strong>
            <span>完整功能闭环</span>
          </div>
          <div class="stat-card">
            <strong>Demo</strong>
            <span>比赛展示级体验</span>
          </div>
        </div>
      </div>

      <div class="hero-right">
        <div class="preview-shell">
          <div class="preview-topbar">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="preview-image-wrap">
            <img class="preview-image" :src="homePreview" alt="系统预览" />
          </div>

          <div class="float-card float-top">
            <div class="float-label">高风险段落</div>
            <div class="float-value">3 处</div>
          </div>

          <div class="float-card float-bottom">
            <div class="float-label">推荐文献</div>
            <div class="float-value">12 篇</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心功能 -->
    <section class="section container">
      <div class="section-head">
        <div class="section-badge">核心功能</div>
        <h3>从识别、核查到补证，形成完整事实核查闭环</h3>
        <p>
          不只是判断“像不像 AI”，而是聚焦课程论文与作业中真正影响学术诚信的问题。
        </p>
      </div>

      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <ScanSearch :size="28" stroke-width="1.5" />
          </div>
          <h4>疑似虚构引用识别</h4>
          <p>自动标记文本中疑似编造的文献、数据、法条、人名与观点来源。</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <Database :size="28" stroke-width="1.5" />
          </div>
          <h4>文献与数据来源核查</h4>
          <p>通过数据库检索，判断引用内容是否真实可查。</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <PenTool :size="28" stroke-width="1.5" />
          </div>
          <h4>写作建议与可信补证</h4>
          <p>针对不可信内容提供改写方向与真实文献补充建议。</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <History :size="28" stroke-width="1.5" />
          </div>
          <h4>历史记录与报告导出</h4>
          <p>保存检测记录，支持查看详情与导出 Markdown 格式报告。</p>
        </div>
      </div>
    </section>

    <!-- 为什么值得做 -->
    <section class="section container">
      <div class="section-head">
        <div class="section-badge">为什么值得做</div>
        <h3>不做“通用 AI 检测”，只做“学术事实核查”</h3>
        <p>切口更明确、结果更可解释、落地更易验证</p>
      </div>

      <div class="why-grid">
        <div class="why-card">
          <div class="why-icon">
            <Target :size="28" stroke-width="1.5" />
          </div>
          <h4>切口更明确</h4>
          <p>聚焦大学生课程论文与作业中的事实核查问题，而非泛泛判断“像不像 AI”。</p>
        </div>

        <div class="why-card">
          <div class="why-icon">
            <BadgeCheck :size="28" stroke-width="1.5" />
          </div>
          <h4>结果更可解释</h4>
          <p>通过规则匹配与数据库核查，明确提示“哪里不可信、为什么不可信”。</p>
        </div>

        <div class="why-card">
          <div class="why-icon">
            <FlaskConical :size="28" stroke-width="1.5" />
          </div>
          <h4>更容易落地验证</h4>
          <p>使用测试集对检测规则进行准确率、召回率评估，而非只给一个黑盒分数。</p>
        </div>
      </div>
    </section>

    <!-- 使用流程 -->
    <section class="section container">
      <div class="section-head">
        <div class="section-badge">使用流程</div>
        <h3>四步完成内容核查与优化</h3>
        <p>适合比赛展示、课堂汇报与系统演示，逻辑清晰，流程完整。</p>
      </div>

      <div class="steps">
        <div class="step-card">
          <div class="step-no">01</div>
          <h4>输入文本或上传文件</h4>
          <p>支持文本粘贴与 .txt / .md / .docx / .pdf 文件上传。</p>
        </div>

        <div class="step-card">
          <div class="step-no">02</div>
          <h4>系统识别 AI 特征与可疑引用</h4>
          <p>输出整体风险、可疑文献/数据/法条标记与逐段分析结果。</p>
        </div>

        <div class="step-card">
          <div class="step-no">03</div>
          <h4>查看问题与改写建议</h4>
          <p>解释风险来源，并给出更适合人工表达的优化方向。</p>
        </div>

        <div class="step-card">
          <div class="step-no">04</div>
          <h4>补充真实文献支持</h4>
          <p>围绕文本主题推荐可信学术文献，增强论证依据。</p>
        </div>
      </div>
    </section>

    <!-- 技术可信度说明 -->
    <section class="section container">
      <div class="section-head">
        <div class="section-badge">技术可信度</div>
        <h3>规则核查 + 数据库验证 + 测试集评估</h3>
        <p>让系统的判断有据可依，而不是黑盒输出</p>
      </div>

      <div class="tech-grid">
        <div class="tech-card">
          <div class="tech-icon">
            <FileSearch :size="28" stroke-width="1.5" />
          </div>
          <h4>规则核查</h4>
          <p>对文献、法条、数据、人名等进行结构化匹配与可疑规则筛查。</p>
        </div>

        <div class="tech-card">
          <div class="tech-icon">
            <Database :size="28" stroke-width="1.5" />
          </div>
          <h4>数据库验证</h4>
          <p>通过学术文献数据源检索真实记录，判断引用真实性。</p>
        </div>

        <div class="tech-card">
          <div class="tech-icon">
            <BarChart :size="28" stroke-width="1.5" />
          </div>
          <h4>测试集评估</h4>
          <p>使用测试集对检测规则进行准确率、召回率等指标评估。</p>
        </div>
      </div>
    </section>

    <!-- 检测维度 -->
    <section class="section container">
      <div class="section-head">
        <div class="section-badge">检测维度</div>
        <h3>多维特征联合分析，辅助判断文本中的 AI 生成痕迹</h3>
      </div>

      <div class="chips">
        <span class="chip">句长方差</span>
        <span class="chip">连接词密度</span>
        <span class="chip">词汇多样性</span>
        <span class="chip">套话数量</span>
        <span class="chip">标点多样性</span>
        <span class="chip">模板短语</span>
        <span class="chip">字词重复率</span>
        <span class="chip">困惑度（可选）</span>
      </div>
    </section>

    <!-- 适用场景 -->
    <section class="section container">
      <div class="section-head">
        <div class="section-badge">适用场景</div>
        <h3>面向写作、研究与内容创作的多类使用场景</h3>
      </div>

      <div class="scene-grid">
        <div class="scene-card">
          <h4>大学生论文自查</h4>
          <p>辅助识别论文中可能存在的 AI 痕迹与虚构引用，帮助在提交前进行自查与人工修正。</p>
        </div>
        <div class="scene-card">
          <h4>自媒体内容去AI味</h4>
          <p>优化模板化表达，提升文本自然度、辨识度与读者信任感。</p>
        </div>
        <div class="scene-card">
          <h4>职场报告人性化改写</h4>
          <p>针对公文、总结、汇报等文本给出更专业且更具人为表达感的改写建议。</p>
        </div>
      </div>
    </section>

    <!-- 免责声明 -->
    <section class="section container">
      <div class="notice-card">
        <div class="notice-title">免责声明</div>
        <p>
          本工具基于统计特征分析与规则匹配，结果仅供创作前自查与比赛展示参考，
          不等同于学校、平台或官方机构的最终认定结论。
        </p>
      </div>
    </section>

    <!-- 底部 -->
    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <div class="footer-mark">言</div>
          <div>
            <h4>言必有据</h4>
            <p>大学生课程论文 / 作业 AI 查证助手</p>
          </div>
        </div>

        <div class="footer-meta">
          <span>版本 1.0.0</span>
          <span>支持 .txt / .md / .docx / .pdf</span>
          <span>结果仅供创作前自查参考</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import homePreview from '../assets/home-preview.png'
import {
  ScanSearch,
  Database,
  PenTool,
  History,
  Target,
  BadgeCheck,
  FlaskConical,
  FileSearch,
  BarChart
} from 'lucide-vue-next'
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at left top, rgba(109, 40, 217, 0.12), transparent 24%),
    radial-gradient(circle at right top, rgba(139, 92, 246, 0.10), transparent 22%),
    linear-gradient(180deg, #ffffff 0%, #faf7ff 50%, #f6f2ff 100%);
  color: #1e1b4b;
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.25s ease;
  cursor: pointer;
  border: 1px solid transparent;
}

.btn-primary {
  height: 52px;
  padding: 0 28px;
  font-size: 15px;
  color: #fff;
  background: linear-gradient(135deg, #7c3aed, #5b21b6);
  box-shadow: 0 14px 30px rgba(109, 40, 217, 0.24);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 36px rgba(109, 40, 217, 0.3);
}

.btn-secondary {
  height: 52px;
  padding: 0 28px;
  font-size: 15px;
  color: #5b21b6;
  background: rgba(255, 255, 255, 0.78);
  border-color: rgba(109, 40, 217, 0.16);
}

.btn-secondary:hover {
  transform: translateY(-2px);
  background: #fff;
}

.hero {
  min-height: calc(100vh - 88px);
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 48px;
  padding: 52px 0 72px;
}

.hero-left {
  padding-right: 8px;
}

.hero-badge,
.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 34px;
  padding: 0 14px;
  border-radius: 999px;
  background: rgba(109, 40, 217, 0.08);
  color: #5b21b6;
  font-size: 13px;
  font-weight: 700;
  border: 1px solid rgba(109, 40, 217, 0.08);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #8b5cf6;
  box-shadow: 0 0 0 6px rgba(139, 92, 246, 0.16);
}

.hero-title {
  margin: 22px 0 14px;
  font-size: clamp(42px, 5vw, 68px);
  line-height: 1.06;
  letter-spacing: -0.04em;
  color: #0f172a;
}

.hero-title span {
  background: linear-gradient(135deg, #6d28d9, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-subtitle {
  margin: 0 0 16px;
  font-size: 24px;
  line-height: 1.4;
  font-weight: 700;
  color: #475569;
}

.hero-desc {
  max-width: 620px;
  margin: 0 0 28px;
  font-size: 18px;
  line-height: 1.85;
  color: #475569;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.tag {
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(109, 40, 217, 0.1);
  color: #4c1d95;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.04);
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.stat-card {
  min-width: 140px;
  padding: 16px 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(109, 40, 217, 0.1);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.05);
}

.stat-card strong {
  display: block;
  font-size: 24px;
  color: #1e1b4b;
  margin-bottom: 6px;
}

.stat-card span {
  font-size: 13px;
  color: #64748b;
}

.hero-right {
  position: relative;
}

.preview-shell {
  position: relative;
  padding: 18px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid rgba(255, 255, 255, 0.88);
  box-shadow: 0 24px 80px rgba(76, 29, 149, 0.14);
  backdrop-filter: blur(14px);
}

.preview-topbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 2px 14px;
}

.preview-topbar span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ddd6fe;
}

.preview-image-wrap {
  overflow: hidden;
  border-radius: 22px;
  background: #fff;
  box-shadow: inset 0 0 0 1px rgba(109, 40, 217, 0.06);
}

.preview-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.float-card {
  position: absolute;
  min-width: 136px;
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.12);
  border: 1px solid rgba(109, 40, 217, 0.08);
}

.float-top {
  top: -18px;
  right: -18px;
}

.float-bottom {
  left: -18px;
  bottom: 22px;
}

.float-label {
  font-size: 12px;
  color: #64748b;
  margin-bottom: 4px;
}

.float-value {
  font-size: 22px;
  font-weight: 800;
  color: #1e1b4b;
}

.section {
  padding: 42px 0 20px;
}

.section-head {
  text-align: center;
  max-width: 820px;
  margin: 0 auto 30px;
}

.section-head h3 {
  margin: 16px 0 12px;
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.2;
  color: #0f172a;
}

.section-head p {
  margin: 0;
  font-size: 16px;
  line-height: 1.8;
  color: #475569;
}

/* 核心功能网格 */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.feature-card,
.step-card,
.scene-card,
.notice-card,
.why-card,
.tech-card {
  padding: 26px 22px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(109, 40, 217, 0.1);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.feature-card:hover,
.step-card:hover,
.scene-card:hover,
.why-card:hover,
.tech-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 44px rgba(15, 23, 42, 0.1);
}

.feature-icon,
.why-icon,
.tech-icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: rgba(109, 40, 217, 0.1);
  color: #6d28d9;
  margin-bottom: 18px;
}

.feature-card h4,
.step-card h4,
.scene-card h4,
.why-card h4,
.tech-card h4 {
  margin: 0 0 12px;
  font-size: 18px;
  color: #1e1b4b;
}

.feature-card p,
.step-card p,
.scene-card p,
.notice-card p,
.why-card p,
.tech-card p {
  margin: 0;
  color: #475569;
  line-height: 1.8;
  font-size: 14px;
}

/* 为什么值得做网格 */
.why-grid,
.tech-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

/* 步骤流程 */
.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.step-no {
  width: fit-content;
  min-width: 54px;
  height: 32px;
  padding: 0 12px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(109, 40, 217, 0.1);
  color: #5b21b6;
  font-size: 13px;
  font-weight: 800;
  margin-bottom: 14px;
}

/* 检测维度标签 */
.chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.chip {
  padding: 12px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(109, 40, 217, 0.12);
  color: #4c1d95;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.04);
}

/* 适用场景网格 */
.scene-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

/* 免责声明卡片 */
.notice-card {
  text-align: center;
  padding: 28px 24px;
}

.notice-title {
  font-size: 20px;
  font-weight: 800;
  color: #1e1b4b;
  margin-bottom: 12px;
}

/* 底部 */
.site-footer {
  padding: 28px 0 36px;
  margin-top: 20px;
  border-top: 1px solid rgba(109, 40, 217, 0.08);
  background: rgba(255, 255, 255, 0.52);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #7c3aed, #5b21b6);
  color: #fff;
  font-size: 20px;
  font-weight: 800;
}

.footer-brand h4 {
  margin: 0;
  font-size: 20px;
  color: #1e1b4b;
}

.footer-brand p {
  margin: 4px 0 0;
  font-size: 12px;
  color: #64748b;
}

.footer-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 16px;
  color: #64748b;
  font-size: 13px;
}

/* 响应式 */
@media (max-width: 1100px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 34px;
    padding-top: 36px;
  }

  .feature-grid,
  .steps,
  .why-grid,
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .scene-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .float-top,
  .float-bottom {
    position: static;
    margin-top: 14px;
  }
}

@media (max-width: 640px) {
  .container {
    width: min(100% - 24px, 1200px);
  }

  .hero {
    min-height: auto;
    padding: 26px 0 56px;
  }

  .hero-title {
    margin-top: 18px;
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 20px;
  }

  .hero-desc {
    font-size: 15px;
    line-height: 1.9;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-stats,
  .hero-tags {
    gap: 10px;
  }

  .stat-card {
    flex: 1 1 100%;
  }

  .feature-grid,
  .steps,
  .why-grid,
  .tech-grid,
  .scene-grid {
    grid-template-columns: 1fr;
  }

  .section-head h3 {
    font-size: 28px;
  }

  .footer-inner {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>