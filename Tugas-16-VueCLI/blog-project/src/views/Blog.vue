<template>
  <div>
    <v-card v-if="blog.id">
      <v-img
        :src="
          blog.photo
            ? apiDomain + blog.photo
            : 'https://placeimg.com/640/480/nature'
        "
        class="white--text"
      >
        <v-card-title
          class="fill-height align-end"
          v-text="blog.title"
        ></v-card-title>
      </v-img>
      <v-card-text>
        <v-simple-table dense>
          <tbody>
            <tr>
              <td><v-icon>mdi-format-title</v-icon>Judul</td>
              <td class="blue--text">{{ blog.title }}</td>
            </tr>
            <tr>
              <td><v-icon>mdi-note</v-icon>Deskripsi</td>
              <td>{{ blog.description }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    apiDomain: "http://demo-api-vue.sanbercloud.com",
    blog: {},
  }),
  methods: {
    go() {
      let { id } = this.$route.params;
      const config = {
        method: "get",
        url: this.apiDomain + "/api/v2/blog/" + id,
      };
      this.axios(config)
        .then((res) => {
          let { blog } = res.data;
          this.blog = blog;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.go();
  },
};
</script>
