<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="props.link"
    class="custom-link-item"
  >
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" class="custom-link-icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="custom-link-title">{{ props.title }}</q-item-label>
      <q-item-label caption class="custom-link-caption">{{
        props.caption
      }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineOptions({
  name: "EssentialLink",
});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: "",
  },

  link: {
    type: String,
    default: "#",
  },

  icon: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.custom-link-item {
  font-family: "Century Gothic", Arial, sans-serif;
  padding: 13px 16px;
  user-select: none;
}

.custom-link-title {
  font-size: 17px;
  font-weight: bold;
  color: #222222;
  margin-left: 20px;
}

.custom-link-caption {
  font-size: 13px;
  color: #5f5f5f;
  margin-left: 20px;
}

.custom-link-icon {
  color: #4200ff;
  margin-left: 17px;
  font-size: 30px;
}
</style>
