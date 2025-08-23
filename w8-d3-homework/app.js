Vue.component('blog-nav', {
  template: `
    <nav class="nav justify-content-center bg-light py-2">
      <a class="nav-link" href="#">Home</a>
      <a class="nav-link" href="#">Recipes</a>
      <a class="nav-link" href="#">Lifestyles</a>
      <a class="nav-link" href="#">Videos</a>
      <a class="nav-link" href="#">About</a>
    </nav>
  `
});

Vue.component('featured-image', {
  template: `
    <div class="text-center my-4">
      <img src="images/white-chicken-chili.jpg"
           class="img-fluid rounded shadow"
           alt="White Chicken Chili">
    </div>
  `
});

new Vue({
  el: "#app",
  data: {
    activeProfile: null,
    posts: [
      {
        author: "Brianna",
        date: "February 18, 2021 @ 3:30 pm",
        content: "Was amazing! My Walmart didn’t have coriander in stock...",
        img: "images/profile.png",
        level: "Novice",
        bio: "Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!"
      },
      {
        author: "LINH",
        date: "February 15, 2021 @ 9:46 am",
        content: "I just made this soup today and it’s so tasty!...",
        img: "images/profile.png",
        level: "Newcomer",
        bio: "Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time."
      },
      {
        author: "CATHERINE LEONARDO",
        date: "February 13, 2021 @ 12:58 pm",
        content: "I LOVE this White Chicken Chili! You are right...",
        img: "images/profile.png",
        level: "Mentor",
        bio: "I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!"
      },
      {
        author: "KALI",
        date: "February 13, 2021 @ 11:31 am",
        content: "This recipe is dynamite! My partner usually won’t eat beans...",
        img: "images/profile.png",
        level: "Novice",
        bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!"
      }
    ]
  },
  methods: {
    openProfile(profile) {
      this.activeProfile = profile;
    },
    closeProfile() {
      this.activeProfile = null;
    }
  }
});
