const el = document.querySelector('#powered-by-mehtalogy');
if (el) {


    el.innerHTML = `
      <style>
        .wrapper {
          display: flex;
          gap: 8px;
          align-items: center;
          font-family: Arial, sans-serif;
          padding: 4px;
        }

        .brand {
          font-weight: 600;
          white-space: nowrap;
        }

        .blue { color: #3b82f6; }
        .gradient {
          background: linear-gradient(to right,#3b82f6,#8b5cf6,#22d3ee);
          -webkit-background-clip: text;
          color: transparent;
        }
      </style>

      <div class="wrapper" title="Powered by Mehtalogy LABS">
        <img src="https://mehtalogy.in/favicon.svg"
             width="28" height="28"
             alt="Mehtalogy" />

        <span class="brand">
          <span class="blue">Mehtalogy</span>
          <span class="gradient">LABS</span>
        </span>
      </div>
    `;

    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.justifyContent = "center";
    el.style.backgroundColor = "black";
    el.style.textDecoration = "none";
    el.style.cursor = "pointer";

    // fix underline on hover
    el.addEventListener("mouseenter", () => {
        el.style.textDecoration = "none";
    });
    el.addEventListener("mouseleave", () => {
        el.style.textDecoration = "none";
    });
}




/*

how to add widget:

import Script from "next/script";

<a id="powered-by-mehtalogy"
   href="https://mehtalogy.in"
   target="_blank" title="Powered by Mehtalogy LABS">
  Mehtalogy LABS
</a>
        
<Script src="https://mehtalogy.in/pb/v1.js" 
        strategy="afterInteractive" />
      
*/
