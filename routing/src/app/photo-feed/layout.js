import React from "react";

function PhotoFeedLayout({ children, modal }) {
  return (
    <div>
      <main>
        {modal}
        {children}
      </main>
    </div>
  );
}

export default PhotoFeedLayout;
