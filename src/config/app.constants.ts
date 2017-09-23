interface Constants {
    mainUrl: string;

    newsCategoryID: number;
    publicationsCategoryID: number;
    // blogsCategoryID: number;

    topPostStorageKey: string;
    newsStorageKey: string;
    publicationsStorageKey: string;
    blogsStorageKey: string;

    newsPageID: number;
    publicationsPageID: number;
    blogsPageID: number;

    startPageNumber: number;

    newsJsonMaxLength: number;
    publicationsJsonMaxLength: number;
    blogsJsonMaxLength: number;

    scrollTimeOutDuration: number;
    refreshTimeOutDuration: number;
    spinnerHideTimeOutDuration: number;
    toastDisplayTimeDuration: number;

    receivedIdStatus: string;
    toastDisplayPosition;
    disconnectToastMessage: string;
}

export const CONSTANTS: Constants = {
    mainUrl: 'http://topkonotop.com/', /*'http://top_konotop.grodas.com.ua/',*/

    newsCategoryID: 59,
    publicationsCategoryID: 60,

    topPostStorageKey: 'top',
    newsStorageKey: 'news',
    publicationsStorageKey: 'publications',
    blogsStorageKey: 'blogs',

    newsPageID: 0,
    publicationsPageID: 1,
    blogsPageID: 2,

    startPageNumber: 1,

    newsJsonMaxLength: 30,
    publicationsJsonMaxLength: 20,
    blogsJsonMaxLength: 10,

    scrollTimeOutDuration: 1000,
    refreshTimeOutDuration: 1000,
    spinnerHideTimeOutDuration: 1000,
    toastDisplayTimeDuration: 3000,
    
    receivedIdStatus: 'id:received',
    toastDisplayPosition: 'bottom',
    disconnectToastMessage: 'Відсутнє інтернет з\'єднання'
}