export default {
  functional: true,
  props: {
    row: Object,
    column: Object,
    index: Number,
    renderRow: Function
  },
  render: (h, ctx) => {
    const params = {
      row: ctx.props.row,
      column: ctx.props.column,
      index: ctx.props.index
    };

    return ctx.props.renderRow(h, params);
  }
};

