<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <p>
      By<a href="#" class="link-unstyled">{{ thread.author?.name }}</a
      >, <AppDate :timestamp="thread.publishedAt" />
      <span
        style="float: right; margin-top: 2px"
        class="hide-mobile text-faded text-small"
        >{{ thread.repliesCount }} replies by
        {{ thread.contributorsCount }} contributors</span
      >
    </p>

    <post-list :posts="threadPosts" />

    <post-editor @save="addPost" />
  </div>
</template>
<script>
import PostList from "@/components/PostList";
import PostEditor from "@/components/PostEditor";
import AppDate from "@/components/AppDate.vue";
export default {
  components: {
    PostList,
    PostEditor,
    AppDate,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },

  computed: {
    threads() {
      return this.$store.state.threads;
    },
    posts() {
      return this.$store.state.posts;
    },
    thread() {
      // return this.$store.getters.thread(this.id);
      return this.threads.find((thread) => thread.id === this.id);
      // return this.threads.find((thread) => thread.id === this.$route.params.id);
    },
    threadPosts() {
      return this.posts.filter((post) => post.threadId === this.id);
    },
  },
  methods: {
    addPost(eventData) {
      const post = {
        ...eventData.post,
        threadId: this.id,
      };
      this.$store.dispatch("createPost", post);
    },
  },
};
</script>

<style scoped></style>
