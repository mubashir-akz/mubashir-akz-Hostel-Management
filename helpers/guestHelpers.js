const db = require("../config/connection");
const collections = require("../config/collections");
const { ObjectId } = require("mongodb");
const object = require("mongodb").ObjectID;

module.exports = {
    getHostelList: () =>
        new Promise(async (resolve, reject) => {
            const hostels = [{ 'Hostel': 'Perl Harbour', 'RoomType': 'Single', 'perNight': '450', 'perMonth': '5000', 'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. ' }]
            resolve(hostels);
        }),
    addGoogle: (data) => {
        return new Promise(async (resolve, reject) => {
            const datas = {
                type: 'google',
                name: data.name,
                picture: data.picture,
                email: data.email,
                gid: data.sub
            }
            var verify = await db.get().collection(collections.GUEST_USERS).find({ gid: data.sub }).toArray()
            console.log(verify.length)
            if (verify.length == 0) {
                await db.get().collection(collections.GUEST_USERS).insertOne(datas)
                var to = await db.get().collection(collections.GUEST_USERS).find({ gid: data.sub }).toArray()
                console.log(to, '...............');
                resolve(to)
            } else {
                var to = await db.get().collection(collections.GUEST_USERS).find({ gid: data.sub }).toArray()
                console.log(to, '...............');
                resolve(to)
            }
        })
    }
}