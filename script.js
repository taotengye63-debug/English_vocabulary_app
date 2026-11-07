// Github用に関数化
function changeResult(startIndex, endIndex, number) {
  // ページ内のすべての対象リストを取得
  const allText = document.querySelectorAll('.prpgress-sakura');
  const allBar = document.querySelectorAll('.progress-bar.progress-bar-info');
  const style = document.createElement('style');
  // 文字列をどんどん追加していくための仮置き変数
  let cssText = '';

  for (let i = startIndex; i <= endIndex; i++) {
    if (allText[i] && allBar[i]) {
      allText[i].textContent = `${number}%`;
      allBar[i].style.width = `${number}%`;
  
      // 識別用クラスを付与/
      const uniquClass = `modified-sakura-${i}`;
      allText[i].classList.add(uniquClass);
  
      // cssのルールを文字列として追加していく
      cssText += `
      .prpgress-sakura.${uniquClass}:before {
      content: url(https://cds.chart.co.jp/assets/contents/books/9xv5lr9k2g/content/14433_drill/img/sakura_80.be24de13.png) !important;
      }
      `;
    }
  }
  // 最期にまとめてcssを適用する
  if (cssText !== '') {
    style.textContent = cssText;
    document.head.appendChild(style);
  }
}
