
:root{
  --bg:#f2eee7;--surface:#fffdf9;--card:#ffffff;--ink:#1d241f;--muted:#6c756f;
  --green:#22352a;--green-2:#3c5946;--sage:#dfe7dc;--sand:#d6b47b;--line:#e3ddd4;
  --amber:#b67631;--red:#a34b43;--shadow:0 16px 48px rgba(28,36,30,.11);--radius:24px
}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{margin:0;min-height:100%;font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--ink);background:linear-gradient(180deg,#f7f3ec,#ece5db)}
button,input,select,textarea{font:inherit}
button{cursor:pointer}
.app{max-width:720px;min-height:100svh;margin:0 auto;padding:18px 16px 106px}
.topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}
.brand{display:flex;gap:13px;align-items:center}.brand-logo{width:56px;height:56px;border-radius:19px;background:var(--green);display:grid;place-items:center;box-shadow:var(--shadow)}
.brand-logo svg{width:37px;height:37px}.brand h1{margin:0;font-size:26px;letter-spacing:-.8px}.brand p{margin:2px 0 0;color:var(--muted);font-size:13px}
.icon-btn{width:46px;height:46px;border-radius:15px;border:1px solid var(--line);background:rgba(255,255,255,.78);color:var(--green);font-size:20px}
.hero{background:var(--green);color:white;border-radius:31px;padding:25px;box-shadow:var(--shadow);position:relative;overflow:hidden}
.hero:after{content:"";position:absolute;width:220px;height:220px;border-radius:50%;right:-95px;top:-90px;background:rgba(255,255,255,.07)}
.hero h2{margin:0 0 10px;font-size:32px;line-height:1.05;letter-spacing:-1px;max-width:470px}.hero p{margin:0;color:#dfe8df;max-width:470px}
.metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:20px;position:relative;z-index:1}.metric{padding:12px;border-radius:18px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.14)}.metric b{display:block;font-size:20px}.metric span{font-size:12px;color:#dfe8df}
.quick-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:16px 0}.quick-card{border:0;border-radius:21px;padding:17px;text-align:left;background:var(--surface);box-shadow:var(--shadow);color:var(--ink);font-weight:850}.quick-card small{display:block;color:var(--muted);margin-top:4px;font-weight:600}
.section-head{display:flex;align-items:center;justify-content:space-between;margin:22px 0 12px}.section-head h2{font-size:23px;margin:0;letter-spacing:-.45px}.section-head button{border:0;background:transparent;color:var(--green-2);font-weight:800}
.input,select,textarea{width:100%;border:1px solid var(--line);background:var(--surface);border-radius:15px;padding:13px 14px;color:var(--ink);margin-bottom:10px}textarea{min-height:100px;resize:vertical}
.inline{display:grid;grid-template-columns:1fr auto;gap:9px}.inline-2{display:grid;grid-template-columns:1fr 1fr;gap:9px}
.tabs{display:flex;gap:8px;overflow:auto;margin-bottom:14px;scrollbar-width:none}.tab{white-space:nowrap;border:1px solid var(--line);background:var(--surface);color:var(--muted);border-radius:999px;padding:9px 13px;font-weight:760}.tab.active{background:var(--green);border-color:var(--green);color:white}
.grid{display:grid;gap:14px}.recipe-grid{display:grid;gap:14px}.card{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden}
.recipe-photo{height:152px;background:linear-gradient(135deg,#e9dfcf,#dfe7da);position:relative;overflow:hidden;display:grid;place-items:center}.recipe-photo img{width:100%;height:100%;object-fit:cover}.recipe-mark{width:88px;height:88px;border-radius:50%;background:white;box-shadow:inset 0 0 0 10px #f0eadf;display:grid;place-items:center;color:var(--green);font-weight:950;font-size:24px}
.badge{position:absolute;top:12px;left:12px;border-radius:999px;background:rgba(255,255,255,.9);padding:7px 10px;font-size:12px;font-weight:850;color:var(--green)}
.card-body{padding:16px}.card-body h3{font-size:20px;margin:0 0 7px}.muted{font-size:13px;color:var(--muted)}
.pills{display:flex;gap:6px;flex-wrap:wrap;margin:10px 0}.pill{font-size:12px;font-weight:820;border-radius:999px;padding:6px 9px;background:var(--sage);color:var(--green)}.pill.warm{background:#fff0db;color:#875316}
.actions{display:flex;gap:8px;margin-top:14px}.btn{border:0;border-radius:14px;padding:12px 13px;font-weight:880;background:var(--green);color:white;flex:1}.btn.secondary{background:white;color:var(--green);border:1px solid var(--line)}.btn.danger{background:white;color:var(--red);border:1px solid #ead0cb}.btn.compact{flex:0;padding:11px 14px}.btn.full{width:100%;margin-top:10px}
.screen{display:none}.screen.active{display:block}
.nav{position:fixed;z-index:20;left:50%;bottom:10px;transform:translateX(-50%);width:min(720px,calc(100% - 20px));display:grid;grid-template-columns:repeat(5,1fr);gap:4px;background:rgba(255,253,249,.93);backdrop-filter:blur(16px);border:1px solid var(--line);border-radius:24px;padding:8px;box-shadow:var(--shadow)}
.nav button{border:0;background:transparent;border-radius:16px;padding:8px 2px;color:var(--muted);font-size:11px;font-weight:850}.nav svg{display:block;width:21px;height:21px;margin:0 auto 3px}.nav button.active{background:var(--sage);color:var(--green)}
.detail{display:none;position:fixed;inset:0;z-index:40;background:var(--bg);overflow:auto;padding:16px}.detail.show{display:block}.close{position:sticky;top:8px;margin-left:auto;display:block;z-index:41;width:47px;height:47px;border-radius:16px;border:1px solid var(--line);background:white;font-size:24px}
.detail-hero{height:250px;background:linear-gradient(135deg,#e9dfcf,#dfe7da);display:grid;place-items:center;overflow:hidden;border-radius:28px 28px 0 0}.detail-hero img{width:100%;height:100%;object-fit:cover}.detail-hero .recipe-mark{width:112px;height:112px;font-size:30px}
.edit-panel{margin-top:15px;padding:14px;border:1px solid var(--line);border-radius:20px;background:#f8f4ed}.edit-panel summary{font-weight:850;cursor:pointer}
.plate-summary{background:var(--green);color:white;border-radius:24px;padding:18px;margin-bottom:14px;box-shadow:var(--shadow)}.plate-summary .muted{color:#dfe8df}.plate-total{font-size:22px;font-weight:950}
.plate-item{display:grid;grid-template-columns:1fr auto auto;gap:10px;align-items:center;padding:13px;background:white;border:1px solid var(--line);border-radius:21px;box-shadow:var(--shadow);margin-bottom:10px}.counter{display:flex;align-items:center;gap:7px}.counter button{width:35px;height:35px;border:0;border-radius:11px;background:var(--sage);color:var(--green);font-size:19px;font-weight:950}.grams-input{width:72px;border:1px solid var(--line);border-radius:11px;padding:8px;text-align:center;font-weight:850}
.shop-item{display:flex;align-items:center;gap:11px;padding:14px}.shop-item input{width:21px;height:21px}.shop-item.done .shop-name{text-decoration:line-through;color:var(--muted)}
.history-item{padding:14px}.history-item h3{margin:0 0 5px;font-size:18px}
.day-row{display:grid;grid-template-columns:90px 1fr;gap:10px;align-items:center;margin-bottom:9px}.day-row label{font-weight:820}
.food-cards{display:grid;grid-template-columns:1fr 1fr;gap:10px}.food-card{padding:14px}.food-card b{font-size:16px}
.empty{text-align:center;color:var(--muted);padding:28px;border-radius:var(--radius);background:var(--surface);border:1px dashed var(--line)}
.toast{position:fixed;left:50%;bottom:100px;transform:translateX(-50%) translateY(20px);background:#16221a;color:white;padding:11px 15px;border-radius:999px;opacity:0;pointer-events:none;transition:.2s;z-index:60}.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.version{text-align:center;color:var(--muted);font-size:11px;margin-top:20px}
@media(min-width:640px){.recipe-grid{grid-template-columns:1fr 1fr}.quick-grid{grid-template-columns:repeat(4,1fr)}}
