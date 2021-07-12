#!/usr/bin/env python3
# Copyright (C) 2020 Jaydeep

import argparse
import math
import os
import re
import sys
from datetime import datetime, timedelta

import requests
from bs4 import BeautifulSoup
from tabulate import tabulate
import pandas

table_row_width = 10
web_headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
          'Upgrade-Insecure-Requests': '1', 'Cookie': 'v2=1495343816.182.19.234.142', 'Accept-Encoding': 'gzip, deflate, sdch'}
TABLE_HEADER_LIST = ['Ticker', 'Owner', 'Relationship', 'Date', 'Transaction', 'Cost', '#Shares', 'Value($)', '#Total Shares', 'SEC Form 4']
TABLE_HEADER_DICT = {1:'Ticker', 2:'Owner', 3:'Relationship', 4:'Date', 5:'Transaction', 6:'Cost', 7:'#Shares', 8:'Value($)', 9:'#Total Shares', 10:'SEC Form 4'}

def get_high_value_insider_trading_details(soup):
    finviz_insider_trading_table_rows = soup.find_all(lambda tag: tag.name == 'tr', class_ = 'insider-buy-row-2')

    insider_trading_td_results = get_table_data_as_array(finviz_insider_trading_table_rows)
    return convert_data_to_multidimentional_array(insider_trading_td_results)

def get_all_insider_trading_details(soup):
    finviz_main_table = soup.find_all(lambda tag: tag.name == 'table', class_ = 'body-table')
    finviz_insider_trading_table_rows = finviz_main_table[0].find_all('tr')

    insider_trading_td_results = get_table_data_as_array(finviz_insider_trading_table_rows)
    return convert_data_to_multidimentional_array(insider_trading_td_results)

def get_table_data_as_array(finviz_insider_trading_table_rows):
    insider_trading_td_results = []
    for i in range(len(finviz_insider_trading_table_rows)):
        td = finviz_insider_trading_table_rows[i].find_all('td')
        insider_trading_td_results += [x.text for x in td]
    
    return insider_trading_td_results

def convert_data_to_multidimentional_array(insider_trading_td_results):
    w, h = 10, 4
    insider_buy_trading_data = [[0 for x in range(w)] for y in range(h)]

    x, y, = 0, 0
    for i in insider_trading_td_results:
        if(i == ''):
            insider_buy_trading_data[x][y] = '-'
        else:
            insider_buy_trading_data[x][y] = i
        
        if(y == 9):
            y = 0
            x += 1
        else:
            y += 1
        
        if(x == 4):
            return insider_buy_trading_data

    return insider_buy_trading_data



if __name__ == '__main__':

    request = requests.get('https://finviz.com/insidertrading.ashx?or=-10&tv=100000&tc=1&o=-transactionValue', headers=web_headers)
    soup = BeautifulSoup(request.content, 'html.parser')
    insider_buy_trading_data = [[]]

    insider_buy_trading_data = get_high_value_insider_trading_details(soup)

    print(tabulate(insider_buy_trading_data, headers=TABLE_HEADER_LIST))