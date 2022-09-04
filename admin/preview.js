let PostPreview = createClass({
  render: function () {
    let entry = this.props.entry;
    return h(
      "div",
      { className: "preview-body" },
      h("header", {}, [
        h("h1", {}, entry.getIn(["data", "title"])),
        h("div", { className: "post-meta" }, [
          h("div", { className: "date" }, [
            h("span", { className: "posted-on" }, [
              h("i", { className: "fa fa-calendar" }),
              h("time", {}, entry.getIn(["data", "date"])),
            ]),
            h("span", { className: "reading-time" }, [
              h("i", { className: "fa fa-clock" }),
              h("span", {}, "阅读时间：XX 分钟"),
            ]),
          ]),
          h("div", { className: "tags" }, [
            h("i", { className: "fa fa-tag" }),
            h("span", { className: "tag" }, [
              h("a", {}, entry.getIn(["data", "tags"])),
            ]),
          ]),
        ]),
      ]),
      h("div", { className: "text" }, this.props.widgetFor("body"))
    );
  },
});
