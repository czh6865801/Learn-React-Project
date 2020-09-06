import React from 'react';
import './index.less';

function Layout(props) {
  console.log(props)
  return (
    <div className="layout">
      <section className="layout-left">
        <aside className="aside">
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
          可以移动<br />
        </aside>
      </section>
      <section className="layout-right">
        <div className="logo-icon">
          <img className="logo-img" src="/Images/logo.svg" />
          <h1 className="logo-name">Ant Design Pro</h1>
        </div>
        <header className="header">
          1111
        </header>
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
            可以移动<br />
          </div>
        </main>
      </section>
    </div>
  )
}

export default Layout;