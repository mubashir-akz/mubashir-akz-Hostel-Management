module.exports = {
    getHostelList: () =>
        new Promise(async (resolve, reject) => {
            const hostels = [{ 'Hostel': 'Perl Harbour', 'RoomType': 'Single', 'perNight': '450', 'perMonth': '5000', 'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. ' }]
            resolve(hostels);
        })
}