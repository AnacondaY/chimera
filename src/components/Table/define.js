import PropTypes from '../../base/prop-types';

export const tableProps = {
    hoverHighlight: PropTypes.bool,
    bordered: PropTypes.bool,
    striped: PropTypes.bool
};

export const defaultTableProps = {
    hoverHighlight: true,
    bordered: false,
    striped: false
};

export const cellPropTypes = {
    cellClass: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    cellStyle: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    onCellClick: PropTypes.func,
    onCellDbClick: PropTypes.func,
    onCellContextMenu: PropTypes.func,
    onCellMouseEnter: PropTypes.func,
    onCellMouseLeave: PropTypes.func
};

export const rowPropTypes = {
    rowStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    rowClass: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    onRowClick: PropTypes.func,
    onRowDbClick: PropTypes.func,
    onRowContextMenu: PropTypes.func
};

export const columnDescriptor = {
    label: PropTypes.string,
    cellRenderer: PropTypes.func,
    headRenderer: PropTypes.func,
    mode: PropTypes.oneOf(['index', 'filterable', 'sortable', 'expandable', 'selectable']),
    filter: PropTypes.func,
    width: PropTypes.number,
    fixed: PropTypes.oneOf([true, false, 'left', 'right'])
};

export const columnDefaultProps = {
    width: 96
};

export const contextTypes = {
    hub: PropTypes.object,
    display: PropTypes.object
};

