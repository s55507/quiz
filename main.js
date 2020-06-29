let que = document.getElementById("que");
let res = document.getElementById("res");
let emoji = document.getElementById("emoji");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let fpr1 = document.getElementById("fpr1");
let fpr2 = document.getElementById("fpr2");
let fpr3 = document.getElementById("fpr3");
let fpr4 = document.getElementById("fpr4");

let cnt = 30;
let sco = 0;
let flag = true;

//タイマー処理
let time = setInterval(() => {
  if (cnt > 0) {
    cnt--;
    res.textContent = "スコア：" + sco + "｜時間：" + cnt + "秒";
  } else {
    res.style.color = "red";
    res.textContent = "スコア：" + sco + "　｜終了";
    que.textContent = "時間切れ";
    flag = false;
    clearInterval(time);
  }
}, 1000);

let num = 0;
let max = 10;

let pro1 = new Array(max);
pro1 = [
  "waving hand",
  "writing hand",
  "見下す顔",
  "普通の表情の顔",
  "何かにおびえる顔",
  "アベノマスクをしている顔",
  "口のない顔",
  "天狗",
  "インベーダー",
  "ﾈﾑｲ顔",
];
let pro2 = new Array(max);
pro2 = [
  "thumbs up",
  "folded hands",
  "ほっとした顔",
  "薄笑いの顔",
  "泣き顔",
  "ボクサーパンツをしている顔",
  "面白くない顔",
  "あーあーそういうことね。完全に理解した",
  "目が星になっている猫",
  "ぴえん",
];
let pro3 = new Array(max);
pro3 = [
  "thumbs down",
  "palms up together",
  "よだれ顔",
  "無表情の顔",
  "絶叫顔",
  "おどけた顔",
  "口チャック（物理）",
  "もやもやしている顔",
  "こ　こ　す　き",
  "くしゅん",
];
let pro4 = new Array(max);
pro4 = [
  "middle finger",
  "right-facing fist",
  "お静かに",
  "嘘つきの顔",
  "テストで不安な高専生の顔",
  "笑顔",
  "今度余計なことを言うと口を縫い合わすぞ",
  "思考停止",
  "あ　ほ　く　さ",
  "うわーん",
];

let seikai = new Array(max);
seikai = ["2", "2", "4", "3", "4", "1", "3", "2", "3", "2"];

one.addEventListener("click", () => {
  if (flag) {
    console.log("one");

    if (num < max) {
      if (seikai[num] === "1") {
        console.log("正解");
        que.style.color = "#FA8072";
        que.textContent = "問題" + (num + 1) + " 正解";
        sco++;
        res.textContent = "スコア：" + sco + "｜時間：" + cnt + "秒";
      } else {
        que.style.color = "#4169E1";
        console.log("不正解");
        que.textContent = "問題" + (num + 1) + " 不正解";
      }
      num++;
      if (num < max) {
        setTimeout(() => {
          que.style.color = "#000000";
          que.textContent = "問題" + (num + 1);
          fpr1.textContent = "1." + pro1[num];
          fpr2.textContent = "2." + pro2[num];
          fpr3.textContent = "3." + pro3[num];
          fpr4.textContent = "4." + pro4[num];
          emoji.src = "img/emoji" + num + ".png";
        }, 500);
      } else {
        clearInterval(time);
        que.style.color = "red";
        que.textContent = "問題の解答終了！";
        if (sco == max) {
          que.style.color = "#6495ED";
          que.textContent = "全問正解おめでとう。すげぇ！";
          emoji.src = "img/clear.png";
        }
      }
    }
  }
});

two.addEventListener("click", () => {
  if (flag) {
    console.log("two");

    if (num < max) {
      if (seikai[num] === "2") {
        console.log("正解");
        que.style.color = "#FA8072";
        que.textContent = "問題" + (num + 1) + " 正解";
        sco++;
        res.textContent = "スコア：" + sco + "｜時間：" + cnt + "秒";
      } else {
        que.style.color = "#4169E1";
        console.log("不正解");
        que.textContent = "問題" + (num + 1) + " 不正解";
      }
      num++;
      if (num < max) {
        setTimeout(() => {
          que.style.color = "#000000";
          que.textContent = "問題" + (num + 1);
          fpr1.textContent = "1." + pro1[num];
          fpr2.textContent = "2." + pro2[num];
          fpr3.textContent = "3." + pro3[num];
          fpr4.textContent = "4." + pro4[num];
          emoji.src = "img/emoji" + num + ".png";
        }, 500);
      } else {
        clearInterval(time);
        que.style.color = "red";
        que.textContent = "問題の解答終了！";
        if (sco == max) {
          que.style.color = "#6495ED";
          que.textContent = "全問正解おめでとう。すげぇ！";
          emoji.src = "img/clear.png";
        }
      }
    }
  }
});
three.addEventListener("click", () => {
  if (flag) {
    console.log("three");

    if (num < max) {
      if (seikai[num] === "3") {
        console.log("正解");
        que.style.color = "#FA8072";
        que.textContent = "問題" + (num + 1) + " 正解";
        sco++;
        res.textContent = "スコア：" + sco + "｜時間：" + cnt + "秒";
      } else {
        que.style.color = "#4169E1";
        console.log("不正解");
        que.textContent = "問題" + (num + 1) + " 不正解";
      }
      num++;
      if (num < max) {
        setTimeout(() => {
          que.style.color = "#000000";
          que.textContent = "問題" + (num + 1);
          fpr1.textContent = "1." + pro1[num];
          fpr2.textContent = "2." + pro2[num];
          fpr3.textContent = "3." + pro3[num];
          fpr4.textContent = "4." + pro4[num];
          emoji.src = "img/emoji" + num + ".png";
        }, 500);
      } else {
        clearInterval(time);
        que.style.color = "red";
        que.textContent = "問題の解答終了！";
        if (sco == max) {
          que.style.color = "#6495ED";
          que.textContent = "全問正解おめでとう。すげぇ！";
          emoji.src = "img/clear.png";
        }
      }
    }
  }
});

four.addEventListener("click", () => {
  if (flag) {
    console.log("four");

    if (num < max) {
      if (seikai[num] === "4") {
        console.log("正解");
        que.style.color = "#FA8072";
        que.textContent = "問題" + (num + 1) + " 正解";
        sco++;
        res.textContent = "スコア：" + sco + "｜時間：" + cnt + "秒";
      } else {
        que.style.color = "#4169E1";
        console.log("不正解");
        que.textContent = "問題" + (num + 1) + " 不正解";
      }
      num++;
      if (num < max) {
        setTimeout(() => {
          que.style.color = "#000000";
          que.textContent = "問題" + (num + 1);
          fpr1.textContent = "1." + pro1[num];
          fpr2.textContent = "2." + pro2[num];
          fpr3.textContent = "3." + pro3[num];
          fpr4.textContent = "4." + pro4[num];
          emoji.src = "img/emoji" + num + ".png";
        }, 500);
      } else {
        clearInterval(time);
        que.style.color = "red";
        que.textContent = "問題の解答終了！";
        if (sco == max) {
          que.style.color = "#6495ED";
          que.textContent = "全問正解おめでとう。すげぇ！";
          emoji.src = "img/clear.png";
        }
      }
    }
  }
});
