export default {
    data() {
      return {
        cdnUrl: "https://cdn.wings.com.tr",
      };
    },
    methods: {
      getCdnUrl(path) {
        return this.cdnUrl + path;
      },
      generateSrcset(srcsetData) {
        const srcsetArray = srcsetData.split(', ');
        const srcsetWithCdn = srcsetArray.map((srcset) => {
          const [path, size] = srcset.split(' ');
          return this.getCdnUrl(path) + ' ' + size;
        });
        return srcsetWithCdn.join(', ');
      },
    },
  };
  