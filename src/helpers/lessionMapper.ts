const lessionMapper = (query) => {
    return {
        total: query.totalCount,
        data: query.nodes.map((l) => {
            const formatted = { ...l, ...l.frontmatter };
            delete formatted.frontmatter;
            return formatted;
        }),
    };
};

export default lessionMapper;
