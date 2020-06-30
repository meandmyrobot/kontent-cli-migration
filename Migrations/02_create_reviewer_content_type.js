const migration = {
    order: 2,
    run: async (apiClient) => {
        await apiClient
            .addContentType()
            .withData(BuildReviewerTypeData)
            .toPromise();
    },
};

const BuildReviewerTypeData = (builder) => {
    return {
        name: 'Reviewer',
        codename: 'reviewer',
        elements: [
            builder.textElement({
                name: 'First Name',
                codename: 'first_name',
                type: 'text',
                is_required: true,
            }),
            builder.textElement({
                name: 'Last Name',
                codename: 'last_name',
                type: 'text',
                is_required: true,
            }),
            builder.textElement({
                name: 'Twitter Handle',
                codename: 'twitter',
                type: 'text',
            }),
        ],
    };
};

module.exports = migration;
