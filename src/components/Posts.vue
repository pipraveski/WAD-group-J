<template>
    <div class="post">
        <div class="post-header">
          
            <img :src="post.profilePicture" :alt="`${post.userName}'s profile picture`" class="profile-picture" />
            <div class="user-info">
                <h3>{{ post.userName }}</h3>
                <p class="post-date">{{ formatDate(post.date) }}</p>
            </div>
        </div>

    <p class="post-text">{{ post.text }}</p>

    <div v-if="post.image" class="post-image">
      <img
        :src="post.image"
        :alt="post.imageTextDescription || 'Post image'"
      />
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Post",
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
    methods: {
        formatDate(date) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString(undefined, options);
    },
  },
  };
  </script>
  
  
  <style scoped>
/* Blog Post Container */
.post {
  max-width: 800px;
  margin: 20px auto; /* Center the blog post */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

/* Header Section */
.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.profile-picture {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 2px solid #0077cc;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.post-date {
  font-size: 14px;
  color: #777;
}

/* Blog Post Text */
.post-text {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 20px;
  text-align: left;
}

/* Blog Post Image Section */
.post-image {
  text-align: center;
  margin-top: 20px;
}

.post-image img {
  max-width: 100%;
  height: 500px;
  border-radius: 8px;
}

.image-description {
  margin-top: 8px;
  font-size: 14px;
  color: #555;
  font-style: italic;
}

/* Responsive Design */
@media (max-width: 600px) {
  .post {
    padding: 15px;
  }

  .profile-picture {
    width: 50px;
    height: 50px;
  }

  .user-name {
    font-size: 16px;
  }

  .post-text {
    font-size: 14px;
  }
}
</style>
