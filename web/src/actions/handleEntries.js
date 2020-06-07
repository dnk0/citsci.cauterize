let nextListId = 3

export const addEntry = (currDate, title, category, target, platform) => ({
    type: 'ADD_ENTRY',
    id: nextListId++,
    submissionDate: currDate,
    title: title,
    category: category,
    platform: platform,
    target: target, 
    author: "dnk0"
})
