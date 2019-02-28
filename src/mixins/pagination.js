const pagination = {
  data () {
    return {
      loading: false,
      finished: true,
      reLoading: true,
      page: 0,
      pageSize: 10,
      offset: 300 // 触发loadMore事件时滚动到底部的距离
    }
  },
  computed: {
    position () {
      return this.page * this.pageSize
    }
  },
  methods: {
    handlePagination (res, isMore) {
      this.loading = false
      this.reLoading = false
      this.finished = !res.more
    },
    getMoreData () {
      this.page += 1
      this.getDataList(true)
    },
    refresh () {
      this.page = 0
      this.getDataList()
    }
  }
}

export default pagination
