'use strict'
import Mock from 'mockjs';
import config from './config';
import queryString from 'query-string';
import _ from 'lodash';

let request = {}

request.get = (url, params) => {
    if(params) {
        url += '?' + queryString.stringify(params)
    }

    return fetch(url)
        .then((response) => response.json())
        .then((response) => Mock.mock(response))
}

request.post = (url, body) => {
    let map = _.extend(config.map, {
        body: JSON.stringify(body)
    })

    return fetch(url, map)
        .then((response) => response.json())
        .then((response) => Mock.mock(response))
}

module.exports = request;


