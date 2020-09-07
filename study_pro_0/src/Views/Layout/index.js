import React from 'react';
import './index.less';

function Layout(props) {
  console.log(props)
  return (
    <div className="layout">
      <header className="layout-header">
        <div className="logo-icon">
          <img className="logo-img" alt="icon" src="/Images/logo.svg" />
          <h1 className="logo-name">Ant Design Pro</h1>
        </div>
        <div className="header-menu">
          首页
        </div>
        <div className="header-other">
          退出
        </div>
      </header>
      <section className="layout-section">
        <aside className="aside">
          <div className="aside-body">
            <div className="aside-content">
              <div>
                可以移动<br />
                可以移动<br />
                可以移动<br />
                可以移动<br />
                可以移动<br />
                可以移动<br />
                可以移动<br />
                可以移动<br />
              </div>
            </div>
            <div className="aside-footer">
              21321
          </div>
          </div>

        </aside>
        <main className="main">
          <div className="main-body">
              可以移动<br />
              可以移动<br />
              可以移动<br />
              可以移动<br />
              可以移动<br />
              可以移动<br />
              可以移动<br />
              可以移动<br />
              可以移动<br />
              可以移动<br />
              可以移动<br />
              可以移动<br />
              可以移动<br />
              可以移动<br />
              可以移动<br />
              可以移动<br />
              可以移动<br />
          </div>
        </main>
      </section>
    </div>
  )
}

export default Layout;