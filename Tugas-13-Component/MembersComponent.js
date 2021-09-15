export const MembersComponent = {
  template: `<tr>
          <td>
            <img
              width="100"
              :src="member.photo_profile != null ? photoDomain + member.photo_profile : 'https://dummyimage.com/600x400/000/fff.png'"
              alt=""
            />
          </td>
          <td>
            <b>Name : </b> {{member.name}} <br />
            <b>Address : </b> {{member.address}} <br />
            <b>Phone : </b> {{member.no_hp}}
          </td>
          <td>
            <button @click="$emit('member', member), $emit('update',true)">Edit</button>
            <button @click="deleteMember(member.id)">Hapus</button>
            <button @click="$emit('member', member), $emit('upload',true)">Upload Foto</button>
          </td>
        </tr>`,
  props: ["member"],
  data() {
    return {
      photoDomain: "http://demo-api-vue.sanbercloud.com",
    };
  },
  methods: {
    deleteMember: function (idx) {
      this.$parent.deleteMember(idx);
    },
  },
};
