const migration = {
    order: 3,
    run: async (apiClient) => {
        const modification = [
            {
                op: 'addInto',
                path: '/elements',
                value: {
                    name: 'Reviewer',
                    codename: 'reviewer',
                    type: 'modular_content',
                },
            },
        ];

        await apiClient
            .modifyContentType()
            .byTypeCodename('album_review')
            .withData(modification)
            .toPromise();
    },
};

module.exports = migration;
