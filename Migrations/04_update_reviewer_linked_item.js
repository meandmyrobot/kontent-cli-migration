const migration = {
    order: 4,
    getReviewerId: async (apiClient) => {
        const response = await apiClient
            .viewContentType()
            .byTypeCodename('reviewer')
            .toPromise();
        return response.data.id;
    },
    run: async (apiClient) => {
        reviewerId = await migration.getReviewerId(apiClient);

        const modification = [
            {
                op: 'replace',
                path: '/elements/codename:reviewer/item_count_limit',
                value: {
                    value: 1,
                    condition: 'exactly',
                },
            },
            {
                op: 'replace',
                path: '/elements/codename:reviewer/allowed_content_types',
                value: [
                    {
                        id: reviewerId,
                    },
                ],
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
