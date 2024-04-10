import request from './request';


export async function searchMeetingRoomList(name: string, capacity: number, equipment: string, pageNo: number, pageSize: number) {
    return await request.get('/meeting-room/list', {
        params: {
            name,
            capacity,
            equipment,
            pageNo,
            pageSize
        }
    });
}
