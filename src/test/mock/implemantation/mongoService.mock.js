import { jest } from '@jest/globals'

const MongoServiceMock = {
    findByEmail: jest.fn(),
    mockClear: ()=>{
        MongoServiceMock.findByEmail.mockClear()
    }
}

export {MongoServiceMock};