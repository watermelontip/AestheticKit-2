import{a as e,d as t,f as n,g as r,i,l as a,m as o,o as s,p as c,r as l,s as u,t as d,u as f}from"./index-BJ6kFLLt.js";var p={class:`playground-page`},m={class:`page-header`},h={class:`header-actions`},g=[`value`],_={class:`playground-content`},v={class:`css-panel`},y={class:`preview-panel`},b={class:`panel-header`},x={class:`viewport-btns`},S={class:`html-panel`},C=d({__name:`Skills`,setup(d){let C=c(``),w=c(``),T=c(`card`),E=c(`desktop`),D=c(null),O=[{id:`card`,name:`Card Component`,html:`<div class="card">
  <div class="card-image"></div>
  <div class="card-content">
    <h2 class="card-title">Beautiful Card</h2>
    <p class="card-desc">This is a customizable card component. Edit the CSS to change its appearance.</p>
    <button class="card-btn">Learn More</button>
  </div>
</div>`,css:`.card {
  width: 320px;
  border-radius: 16px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.card-content {
  padding: 24px;
}

.card-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #1a1a2e;
}

.card-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.card-btn {
  padding: 10px 24px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}`},{id:`button`,name:`Button Collection`,html:`<div class="btn-collection">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-outline">Outline</button>
  <button class="btn btn-ghost">Ghost</button>
  <button class="btn btn-gradient">Gradient</button>
  <button class="btn btn-pill">Pill Button</button>
  <button class="btn btn-icon">🚀 Launch</button>
</div>`,css:`.btn-collection {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 40px;
  justify-content: center;
}

.btn {
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;
}

.btn-primary {
  background: #6366f1;
  color: white;
  border-color: #6366f1;
}
.btn-primary:hover { background: #4f46e5; }

.btn-secondary {
  background: #f1f5f9;
  color: #334155;
  border-color: #e2e8f0;
}
.btn-secondary:hover { background: #e2e8f0; }

.btn-outline {
  background: transparent;
  color: #6366f1;
  border-color: #6366f1;
}
.btn-outline:hover { background: #6366f1; color: white; }

.btn-ghost {
  background: transparent;
  color: #6366f1;
  border-color: transparent;
}
.btn-ghost:hover { background: #f1f5f9; }

.btn-gradient {
  background: linear-gradient(135deg, #f43f5e, #ec4899);
  color: white;
  border: none;
}
.btn-gradient:hover { transform: scale(1.05); }

.btn-pill {
  border-radius: 9999px;
  background: #10b981;
  color: white;
  border: none;
}

.btn-icon {
  background: #1e293b;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
}`},{id:`navbar`,name:`Navigation Bar`,html:`<nav class="navbar">
  <div class="nav-brand">🚀 BrandName</div>
  <div class="nav-links">
    <a href="#" class="nav-link active">Home</a>
    <a href="#" class="nav-link">Features</a>
    <a href="#" class="nav-link">Pricing</a>
    <a href="#" class="nav-link">About</a>
  </div>
  <button class="nav-cta">Get Started</button>
</nav>`,css:`.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: #0f172a;
  border-radius: 12px;
  margin: 20px;
}

.nav-brand {
  font-size: 20px;
  font-weight: 700;
  color: white;
}

.nav-links {
  display: flex;
  gap: 8px;
}

.nav-link {
  padding: 8px 16px;
  color: #94a3b8;
  text-decoration: none;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s;
}

.nav-link:hover, .nav-link.active {
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

.nav-cta {
  padding: 10px 24px;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}`},{id:`form`,name:`Login Form`,html:`<div class="form-container">
  <h2 class="form-title">Welcome Back</h2>
  <p class="form-subtitle">Sign in to your account</p>
  <div class="form-group">
    <label>Email</label>
    <input type="email" placeholder="you@example.com" />
  </div>
  <div class="form-group">
    <label>Password</label>
    <input type="password" placeholder="••••••••" />
  </div>
  <button class="form-btn">Sign In</button>
  <p class="form-footer">Don't have an account? <a href="#">Sign up</a></p>
</div>`,css:`.form-container {
  width: 380px;
  padding: 40px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

.form-title {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 4px;
}

.form-subtitle {
  font-size: 14px;
  color: #94a3b8;
  margin-bottom: 32px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 6px;
}

.form-group input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 15px;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #6366f1;
}

.form-btn {
  width: 100%;
  padding: 14px;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
}

.form-footer {
  text-align: center;
  font-size: 13px;
  color: #94a3b8;
  margin-top: 20px;
}

.form-footer a {
  color: #6366f1;
  text-decoration: none;
}`}];function k(){let e=O.find(e=>e.id===T.value);e&&(w.value=e.html,C.value=e.css,j())}function A(){let e=O.find(e=>e.id===T.value);e&&(C.value=e.css,j())}function j(){if(!D.value)return;let e=`<!DOCTYPE html>
<html><head>
<style>
  body { margin: 0; padding: 40px; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; font-family: 'Inter', sans-serif; }
  ${C.value}
</style>
</head><body>${w.value}</body></html>`,t=new Blob([e],{type:`text/html`});D.value.src=URL.createObjectURL(t)}function M(){let e=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AestheticKit Export</title>
  <style>
    body { margin: 0; padding: 40px; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; font-family: 'Inter', sans-serif; }
    ${C.value}
  </style>
</head>
<body>
  ${w.value}
</body>
</html>`,t=new Blob([e],{type:`text/html`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`aesthetickit-export.html`,r.click(),URL.revokeObjectURL(n)}return a(()=>{k()}),(a,c)=>(f(),u(`div`,p,[s(`header`,m,[c[6]||=s(`div`,null,[s(`h1`,null,`CSS Playground`),s(`p`,null,`Edit CSS in real-time and see instant results`)],-1),s(`div`,h,[n(s(`select`,{"onUpdate:modelValue":c[0]||=e=>T.value=e,class:`template-select`,onChange:k},[(f(),u(e,null,t(O,e=>s(`option`,{key:e.id,value:e.id},r(e.name),9,g)),64))],544),[[l,T.value]]),s(`button`,{class:`btn btn-ghost`,onClick:A},`Reset`),s(`button`,{class:`btn btn-primary`,onClick:M},`Export HTML`)])]),s(`div`,_,[s(`div`,v,[c[7]||=s(`div`,{class:`panel-header`},[s(`span`,null,`CSS`),s(`span`,{class:`file-name`},`styles.css`)],-1),n(s(`textarea`,{"onUpdate:modelValue":c[1]||=e=>C.value=e,class:`css-editor`,spellcheck:`false`,onInput:j},null,544),[[i,C.value]])]),s(`div`,y,[s(`div`,b,[c[8]||=s(`span`,null,`Preview`,-1),s(`div`,x,[s(`button`,{class:o({active:E.value===`desktop`}),onClick:c[2]||=e=>E.value=`desktop`},`🖥`,2),s(`button`,{class:o({active:E.value===`tablet`}),onClick:c[3]||=e=>E.value=`tablet`},`📱`,2),s(`button`,{class:o({active:E.value===`mobile`}),onClick:c[4]||=e=>E.value=`mobile`},`📲`,2)])]),s(`div`,{class:o([`preview-frame`,E.value])},[s(`iframe`,{ref_key:`previewFrame`,ref:D,sandbox:`allow-scripts`},null,512)],2)]),s(`div`,S,[c[9]||=s(`div`,{class:`panel-header`},[s(`span`,null,`HTML`),s(`span`,{class:`file-name`},`index.html`)],-1),n(s(`textarea`,{"onUpdate:modelValue":c[5]||=e=>w.value=e,class:`html-editor`,spellcheck:`false`,onInput:j},null,544),[[i,w.value]])])])]))}},[[`__scopeId`,`data-v-51cad5e0`]]);export{C as default};