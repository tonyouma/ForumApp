<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <label for="thread_title">Title:</label>
      <input
        v-model="form.title"
        type="text"
        class="form-input"
        id="thread_title"
      />
    </div>
    <div class="form-group">
      <label for="thread_content">Content:</label>
      <textarea
        v-model="form.text"
        class="form-input"
        id="thread_content"
        rows="8"
        cols-="140"
      ></textarea>
    </div>
    <div class="btn-group">
      <button class="btn btn-ghost" @click.prevent="$emit(cancel)">
        Cancel
      </button>
      <button type="submit" class="btn btn-blue" name="publish">Publish</button>
    </div>
  </form>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      form: {
        title: this.title,
        text: this.text,
      },
    };
  },
  methods: {
    save() {
      this.$emit("save", { ...this.form });
    },
  },
};
</script>
