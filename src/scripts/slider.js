import Vue from 'vue';

const thumbs = {
  props: ["currentWork", "works"],
  template: "#slider-thumbs"
};

const buttons = {
  template: "#slider-buttons"
};

const display = {
  props: ["currentWork", "works","currentIndex"],
  template: "#slider-display",
  components: {
    buttons, thumbs
  },
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works.slice(0,3).reverse();
    }
  }
};

const tags = {
  props: ["tags"],
  template: "#slider-tags",
};

const info = {
  props: ["currentWork"],
  template: "#slider-info",
  components: {
    tags
  },
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(',');
    }
  }
};

new Vue({
  el: '#slider-component',
  template: "#slider-container",
  components: {
    display, info,
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    }
  },
  computed: {
    currentWork() {
      return this.works[0];
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForIndex(value); 
    }
  },
  methods: {
    makeInfiniteLoopForIndex(index) {
      const worksNumber = this.works.length - 1;
      if (index <0 ) this.currentIndex = worksNumber;
      if (index> worksNumber) this.currentIndex = 0;
    },
    requireImagesToArray(data) {
      return data.map((item) => {
        const requiredImage = require(`../images/content/${item.photo}`)
          .default;
        item.photo = requiredImage;
        return item;
      });
    },
    slide(directions) {
      const lastItem = this.works[this.works.length - 1];
      switch(directions){
        case "next": 
          this.works.push(this.works[0]);
          this.works.shift();
          this.currentIndex++;
          break;
        case "prev":
          this.works.unshift(lastItem);
          this.works.pop();
          this.currentIndex--;  
          break;
      }
    }
  },
  created() {
    let data = require('../data/works.json');
    this.works = this.requireImagesToArray(data);
  }
})