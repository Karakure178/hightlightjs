<script setup>
import hljs from "highlight.js";
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "radix-vue";

import "highlight.js/styles/a11y-dark.css";
import { onMounted, ref, watch, nextTick } from "vue";

const target = ref(null);
const target2 = ref(null);

onMounted(() => {
  nextTick(() => {
    const code = target.value.$el.querySelector("code");
    hljs.highlightBlock(code);
  });
});

// もしコードが表示されたならば、highlight.jsを使ってシンタックスハイライトを適用する
watch(target, () => {
  const state = target2.value.$el.getAttribute("data-state");
  console.log("state", state);
  if (state === "active") {
    const code = target2.value.$el.querySelector("code");
    hljs.highlightBlock(code);
  }
});

watch(target2, () => {
  const state = target2.value.$el.getAttribute("data-state");
  console.log("state_target2", state);

  if (state === "active") {
    const code = target2.value.$el.querySelector("code");
    hljs.highlightBlock(code);
  }
});

const codeSample = `
/**
 * #minacoding June 9: https://minacoding.online/theme
 * theme: A Year Ago
 */
const sketch = function (p) {
  class Cute {
    constructor(w, h, num, r, colorBox) {
      this.w = w;
      this.h = h;
      this.num = num;
      this.r = r;
      this.points = [];
      this.a = 1;
      this.colors = [];
			this.circleSize = [];
			for (let k = 0; k < this.num; k++) {
				this.colors.push(p.random(colorBox));
				this.circleSize.push(p.random(7,15));
			}
    }

    paint_fireWorks(size) {
      p.push();
      p.translate(this.w, this.h);
			const R = size * this.r;
      for (let k = 0; k < this.num; k++) {
	      p.fill(this.colors[k]);
				const angle = p.radians(p.map(k, 0, this.num, 0, 360));
        const x = (R - this.r) * p.cos(angle) * p.cos(angle - (R / this.r) * angle);
        const y = (R - this.r) * p.sin(angle) * p.sin(angle - (R / this.r) * angle);
				p.circle(x,y,this.circleSize[k]);
      }
      p.pop();
    }
  }
  
	let cu;
	const colorBox = ["#A76F6F","#EAB2A0","#E88D67","#F3F7EC"];
	
  p.setup = function () {
    p.createCanvas(800, 800);
    p.frameRate(24);
    p.translate(p.width / 2, p.height / 2);
    //p.strokeWeight(6);
		p.noStroke();
		cu = new Cute(p.width / 2, p.height / 2, 360, 30, colorBox);
  };

  let count = 0;
  p.draw = function () {
    p.background('#2D4356');
    cu.paint_fireWorks(count);
    if (count < 30) {
      count += 0.05;
    } else {
      count = 0;
    }
  };

  p.keyPressed = function () {
    if (p.key === 's') {
      p.saveGif('p5js_rotate', 10);
    }
  };
};

new p5(sketch);
`;

const codeSample2 = `
// Optional jQuery class toggle for added robustness. 

/* 
var labelID;

$('label').click(function() {
  labelID = $(this).attr('for');
  $('input').removeClass('active');
  $('#' + labelID).addClass('active');
}); 
*/
`;
</script>

<template>
  <TabsRoot class="tab" default-value="tab1">
    <TabsList class="tab__list" aria-label="vueとreactの説明">
      <TabsTrigger class="tab__trigger" value="tab1"> Tab.vue </TabsTrigger>
      <TabsTrigger class="tab__trigger" value="tab2"> Code.vue </TabsTrigger>
    </TabsList>
    <TabsContent ref="target" class="tab__content" value="tab1">
      <!-- 折り返し防止にpreタグを使う -->
      <pre>
      <code >{{ codeSample }}</code>
     </pre>
    </TabsContent>
    <TabsContent ref="target2" class="tab__content" value="tab2">
      <pre>
        <code>{{ codeSample2 }}</code>
      </pre>
    </TabsContent>
  </TabsRoot>
</template>

<style lang="scss" scoped>
.tab {
  max-width: 600px;
  border-radius: 5px;
}

.tab__list {
  display: flex;
}

.tab__trigger {
  padding: 10px 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: #f8f8f8;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f0f0f0;
  }

  &[data-state="active"] {
    background-color: #e8e8e8;
  }
}

.tab__content {
  padding: 20px;
  background-color: #e8e8e8;
  min-height: 400px;
}
</style>
