<template>
  <header class="site-header">
    <div class="container header-inner">
      <router-link to="/" class="brand">
        <div class="brand-logo">言</div>
        <div class="brand-text">
          <h1>言必有据</h1>
          <p>大学生课程论文 / 作业 AI查证助手</p>
        </div>
      </router-link>

      <nav class="nav">
        <router-link to="/detect" class="nav-link">检测中心</router-link>
        <router-link to="/history" class="nav-link">检测记录</router-link>
        <router-link to="/recommend" class="nav-link">文献推荐</router-link>
        <router-link to="/assist" class="nav-link">AI写作</router-link>
      </nav>

      <div class="auth-actions">
        <button class="btn btn-ghost">注册</button>
        <button class="btn btn-primary">登录</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(109, 40, 217, 0.08);
}

.container {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
}

.header-inner {
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
}

.brand-logo {
  width: 52px;
  height: 52px;
  border-radius: 18px;
  background: linear-gradient(135deg, #7c3aed, #5b21b6);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 26px;
  font-weight: 800;
  box-shadow: 0 14px 30px rgba(109, 40, 217, 0.24);
}

.brand-text h1 {
  margin: 0;
  font-size: 20px;
  color: #1e1b4b;
}

.brand-text p {
  margin: 4px 0 0;
  font-size: 13px;
  color: #64748b;
}

.nav {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-link {
  padding: 10px 14px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  color: #334155;
  transition: 0.25s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #6d28d9;
  background: rgba(109, 40, 217, 0.08);
}

.auth-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn {
  height: 44px;
  padding: 0 22px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 700;
}

.btn-ghost {
  background: transparent;
  color: #334155;
}

.btn-primary {
  background: linear-gradient(135deg, #7c3aed, #5b21b6);
  color: #fff;
  box-shadow: 0 14px 30px rgba(109, 40, 217, 0.24);
}
</style>