import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},

        ]
        this._devices = [
            {id: 1, name: 'Iphone 12', price: 20000, rating: 5, img: 'https://cdn21vek.by/img/galleries/6941/525/iphone13128gbmlny3_apple_6155ca6711da1.jpeg'},
            {id: 2, name: 'Iphone 12', price: 20000, rating: 5, img: 'https://cdn21vek.by/img/galleries/6941/525/iphone13128gbmlny3_apple_6155ca6711da1.jpeg'},
            {id: 3, name: 'Iphone 12', price: 20000, rating: 5, img: 'https://cdn21vek.by/img/galleries/6941/525/iphone13128gbmlny3_apple_6155ca6711da1.jpeg'},
            {id: 4, name: 'Iphone 12', price: 20000, rating: 5, img: 'https://cdn21vek.by/img/galleries/6941/525/iphone13128gbmlny3_apple_6155ca6711da1.jpeg'},
            {id: 5, name: 'Iphone 12', price: 20000, rating: 5, img: 'https://cdn21vek.by/img/galleries/6941/525/iphone13128gbmlny3_apple_6155ca6711da1.jpeg'},
            {id: 6, name: 'Iphone 12', price: 20000, rating: 5, img: 'https://cdn21vek.by/img/galleries/6941/525/iphone13128gbmlny3_apple_6155ca6711da1.jpeg'},
            {id: 7, name: 'Iphone 12', price: 20000, rating: 5, img: 'https://cdn21vek.by/img/galleries/6941/525/iphone13128gbmlny3_apple_6155ca6711da1.jpeg'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}

