import requests
import time
import random

url = 'http://172.17.0.2:3001/request'

if __name__ == "__main__":
    count = 0 
    while(True):
        response = requests.put(url)
        content = response.content
        print(f"Sent the request number {count} to {url}")
        print(content)
        count = count + 1
        time.sleep(random.randint(10, 20))