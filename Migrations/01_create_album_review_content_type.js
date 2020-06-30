const migration = {
    order: 1,
    run: async (apiClient) => {
        await apiClient
            .addContentType()
            .withData(BuildAlbumReviewTypeData)
            .toPromise();
    },
};

const BuildAlbumReviewTypeData = (builder) => {
    return {
        name: 'Album Review',
        codename: 'album_review',
        elements: [
            builder.textElement({
                name: 'Title',
                codename: 'title',
                type: 'text',
            }),
            builder.textElement({
                name: 'Album Name',
                codename: 'album_name',
                type: 'text',
                is_required: true,
            }),
            builder.textElement({
                name: 'Artist',
                codename: 'artist',
                type: 'text',
                s_required: true,
            }),
            builder.textElement({
                name: 'Review',
                codename: 'review',
                type: 'rich_text',
            }),
        ],
    };
};

module.exports = migration;
