import React from 'react';

const Layout = ({ children }) => {
    return(
        <section>
            <header>header</header>
            {children}
        </section>
    );
}

export default Layout;