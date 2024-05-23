import React, { useState } from "react";
import hljs from "highlight.js/lib/core";
import python from "highlight.js/lib/languages/python";
import "highlight.js/styles/default.css";
import "tailwindcss/tailwind.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";

hljs.registerLanguage("python", python);

const Python: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [code, setCode] = useState("");

  const handleSidebar = (codeSnippet: string) => {
    setCode(codeSnippet);
    setSidebarOpen(true);
  };

  const handleContact = () => {
    window.location.href = "mailto:leo.radtke.info@gmail.com";
  };

  const pythonCodeSamples = {
    nft: `
    import json
    import yaml
    import requests
    
    
    #'secrets.yaml', 'r'
    # Load the secrets.yaml file "C:\Users\Admin\OneDrive\LeoPython\Python mit Manuel\PythonKursMitManuel\Lektion13\nft_api\secrets.yaml"
    with open(r'C:\Users\Admin\OneDrive\Python mit Manuel\leo_git_tutorial\PythonKursMitManuel\Lektion17\secrets.yaml') as file:
        secrets = yaml.safe_load(file)
    
    # Access the API key
    nftgo_api_key = secrets['nftgo_key']
    os_api_key = secrets['os_key']
    
    
    def get_addressen_liste() :
       
       # öffne JSON datei  addressen.json", "r"
       with open(r"C:\Users\Admin\OneDrive\Python mit Manuel\leo_git_tutorial\PythonKursMitManuel\Lektion17\addressen.json") as file: 
          data = file.read()
        
       data_dict = json.loads(data)
       projekte = ["BORED_APES_ADDRESS", "PORSCHE_ADDRESS", "CRYPTOPUNKS_ADDRESS", "PUMA", "DOODLES"]
       liste = [data_dict[key] for key in projekte]
       
       return liste
    
    
    def ng_get_info_from_collection(adresse, nft_collections_df):
    
        url = f"https://data-api.nftgo.io/eth/v1/collection/{adresse}/info" #application/json
    
        headers = { 
            "accept":"application/json",
            "X-API-KEY": nftgo_api_key
        }
    
        response = requests.get(url, headers=headers)
        #python_dictionary = response.json() 
        response_text = response.text
        python_dictionary = json.loads(response_text)
        
        # Daten als Variablen speichern
        blockchain = python_dictionary["blockchain"] 
        Twitter =  python_dictionary ["twitter_url"]
        Official_Website = python_dictionary ["official_website_url"]
        Name =  python_dictionary["name"]
        
        # Daten in Dataframe abspeichern
        nft_collections_df.loc[nft_collections_df['Collection Adresse'] == adresse, 'Blockchain'] = blockchain
        nft_collections_df.loc[nft_collections_df['Collection Adresse'] == adresse, 'Twitter'] = Twitter
        nft_collections_df.loc[nft_collections_df['Collection Adresse'] == adresse, 'Official Website'] = Official_Website
        nft_collections_df.loc[nft_collections_df['Collection Adresse'] == adresse, 'Name'] = Name
    
    
        
    def os_get_collection_stats(collection_slug, addresse, nft_collections_df):
        
        url = f"https://api.opensea.io/api/v1/collection/{collection_slug}/stats"
    
        headers = {"accept": "application/json" , 
                   "X-API-KEY": os_api_key 
        }             
    
        response = requests.get(url, headers=headers)
        res = response.json()
    
        # Daten als Variablen speichern
        avg_price = res["stats"]["average_price"]
        rounded_avg_price = round(avg_price, 2)
    
        # Daten in Dataframe abspeichern
        nft_collections_df.loc[nft_collections_df["Collection Adresse"] == addresse, "avg_price"] = rounded_avg_price
    
    
        
    def os_get_collection_stats(collection_slug, addresse, nft_collections_df):
        
        url = f"https://api.opensea.io/api/v1/collection/{collection_slug}/stats"
    
        headers = {"accept": "application/json" , 
                   "X-API-KEY": os_api_key 
        }             
    
        response = requests.get(url, headers=headers)
        res = response.json()
    
        # Daten als Variablen speichern
        avg_price = res["stats"]["average_price"]
        rounded_avg_price = round(avg_price, 2)
    
        # Daten in Dataframe abspeichern
        nft_collections_df.loc[nft_collections_df["Collection Adresse"] == addresse, "avg_price"] = rounded_avg_price
        
    
    
    def beschreibungstext(adresse, nft_collections_df): 
        namen = nft_collections_df.loc[nft_collections_df['Collection Adresse'] == adresse, 'Name'].values[0]
        blockchain = nft_collections_df.loc[nft_collections_df['Collection Adresse'] == adresse, 'Blockchain'].values[0]
        total_supply = nft_collections_df.loc[nft_collections_df['Collection Adresse'] == adresse, 'total_supply'].values[0]
        num_owners =  nft_collections_df.loc[nft_collections_df['Collection Adresse'] == adresse, 'num_owners'].values[0]
        floor_price_usd =  nft_collections_df.loc[nft_collections_df['Collection Adresse'] == adresse, 'floor_price_usd'].values[0]
        floor_price_usd = round(float(floor_price_usd), 2)
        twitter = nft_collections_df.loc[nft_collections_df['Collection Adresse'] == adresse, 'Twitter'].values[0]
        website = nft_collections_df.loc[nft_collections_df['Collection Adresse'] == adresse, 'Official Website'].values[0]
        
        
        beschreibung = f'''
    Die NFT collection mit dem Namen {namen} wurde auf der Blockchain {blockchain} veröffentlicht. 
    Die Collection bestehet aus {total_supply} NFTS und es gibt aktuell {num_owners} Besitzer. 
    Den billigsten NFT kann man aktuell für {floor_price_usd} USD kaufen. 
    Die offizielle Website ist {website} und der Twitter Link ist {twitter}.
    '''
        return beschreibung
    
    def ng_get_metrics_from_collection(adresse, nft_collections_df):
    
        url= f"https://data-api.nftgo.io/eth/v1/collection/{adresse}/metrics"
    
        headers = {
            "accept": "application/json",
            "X-API-KEY": nftgo_api_key
        }
    
        response = requests.get(url, headers=headers)
        python_dictionary = response.json()
    
        # Daten als Variablen speichern
        num_owners = python_dictionary["holder_num"]
        total_supply = python_dictionary["total_supply"]
        floor_price_eth = python_dictionary["floor_price"]["value"]
        floor_price_usd = python_dictionary["floor_price"]["usd"]
    
        # Daten in Dataframe abspeichern
        nft_collections_df.loc[nft_collections_df['Collection Adresse'] == adresse, 'num_owners'] = num_owners
        nft_collections_df.loc[nft_collections_df['Collection Adresse'] == adresse, 'total_supply'] =  total_supply
        nft_collections_df.loc[nft_collections_df['Collection Adresse'] == adresse, 'floor_price_eth'] = floor_price_eth 
        nft_collections_df.loc[nft_collections_df['Collection Adresse'] == adresse, 'floor_price_usd'] = floor_price_usd            
    
    
    
    
    
    
    `,
    search: `
    # Suchalgorithmen 
    import random as rd
    
    
    # 1. Lineare Suche
    def lineareSuche(kundendaten , gesuchter_kunde):
        for kunde in kundendaten:
            if kunde == gesuchter_kunde:
                return "Der Kunde " + gesuchter_kunde + " wurde gefunden"
        return "Der Kunde " + gesuchter_kunde + " wurde nicht gefunden"
        
    def test_lineareSuche():    
        kunde = "Niclas"
        kundendaten = ["Alfred", "Beate", "Klaus", "Hannah", "Leo", "Sebastian", "Ingrid", "Johanna", "Stefan", "Niclas"]
        ergebnis = lineareSuche(kundendaten, kunde)
        print(ergebnis)
    
    test_lineareSuche()
    
    # Eingabelänge n (n = 10)
    # Best case O(1)
    # Worst case O(n)
    
    
    # 2. Binäre Suche
    # Voraussetzung: sortierte Daten
    def binäreSuche(liste, gesuchtesElement):
        links = 0
        rechts = len(liste) - 1
        mitte =  len(liste) // 2
        
        while links < rechts:
            if liste[mitte] == gesuchtesElement:
                return gesuchtesElement
            elif gesuchtesElement > liste[mitte]:
                # nur noch rechten Teil anschauen
                links = mitte + 1
                mitte = (links + rechts) // 2
            else:
                #nur noch linken Teil anschauen
                rechts = mitte - 1
                mitte = (links + rechts) // 2
             
    
    
    # Wenn gesuchtes Element in Liste, dann gesuchtes Element (Zahl) zurückgeben. 
    # Falls nicht, -1 zurückgeben.
    def test_binäreSuche():
        gesuchtesElement = 100 #rd.randint(50, 1000)
        zahlen = list(range(50, 1000))
        res = binäreSuche(zahlen, gesuchtesElement)
        if res == gesuchtesElement:
            print("Wurde gefunden:", res)
        else:
            print("Das gesuchtes Element:", gesuchtesElement, "wurde nicht gefunden!")
    
    
    # Eingabelänge n (n = 10)
    # Best case O(1)
    # Worst case O(log n)
        
    
    `,
    tree: `
    import turtle
    import random
    from listen import myColorList
    
    def draw_christmas_tree():
        turtle.fillcolor(myColorList[8])
        turtle.begin_fill()
        turtle.penup()
        turtle.goto(-200, -200)
        turtle.pendown()
        turtle.pensize(10)
        turtle.pencolor(myColorList[8])
        turtle.goto(0, 250)
        turtle.goto(200, -200)
        turtle.goto(-200, -200)
        turtle.end_fill()
    
    
    
    def draw_tree_trunk():
        turtle.fillcolor(myColorList[3])
        turtle.begin_fill()
        turtle.pencolor(myColorList[3])
        turtle.penup()
        turtle.goto(-25, -200)
        turtle.pendown()
        turtle.goto(-25, -300)
        turtle.goto(25, -300)
        turtle.goto(25, -200)
        turtle.goto(-25, -200)
        turtle.end_fill()
    
    def draw_baubles():
        x1 = -200
        x2 = 240
        y = -220
        for _ in range(1, 8):
            for x_coordinate in range(x1, x2, 80):
                color = random.choice(myColorList)
                turtle.pencolor(color)
                turtle.fillcolor(color)
                turtle.penup()
                turtle.goto(x_coordinate, y)
                turtle.pendown()
                turtle.begin_fill()
                turtle.circle(14)
                turtle.end_fill()
            x1 += 40
            x2 -= 40
            y += 80
    
    def draw_star():
        turtle.penup()
        turtle.goto(-20, 260)
        turtle.pendown()
        turtle.fillcolor("yellow")
        turtle.pencolor("yellow")
        turtle.begin_fill()
        for _ in range(5): 
            turtle.forward(40) 
            turtle.right(144)
        turtle.end_fill()
    
    def draw_text():
        turtle.penup()
        turtle.goto(0, -350)
        turtle.pendown()
        turtle.write("Frohe Weihnachten!", align="center", font=("Comic Sans MS", 30, "normal"))
    
    # Setup
    turtle.setup(800, 800)
    turtle.title("Frohe Weihnachten!")
    turtle.speed(50)
    turtle.bgcolor(myColorList[221])
    
    # Drawing
    draw_christmas_tree()
    draw_tree_trunk()
    draw_baubles()
    draw_star()
    draw_text()
    
    
    # Finishing
    turtle.hideturtle()
    turtle.exitonclick()
    
    # Die Sachen  für Turtel : 
    # https://mange.ifrn.edu.br/python/pyturtle-cheat-sheets.pdf
    
    `,
  };

  return (
    <>  <div className="bg-gray-100 p-6 md:p-16 rounded-xl shadow-lg dark:bg-neutral-800 m-[200px]">
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-mediumbold dark:text-neutral-200">
          My <span className="text-blue-300 font-bold"> Python </span>
          Projects –{" "}
          <span className="text-blue-300 font-bold">Contact me</span> for
          Your Perfect Solution!
        </h2>
        <div className="mt-4 mb-[-100px]">
          <Button
            className="text-black"
            variant="outline"
            onClick={handleContact}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* NFT Collections Card */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-blue-200 rounded-t-xl">
            <Image
              src="/collections.png"
              alt="NFT Collections"
              width={500}
              height={210}
              className="rounded-t-xl"
            />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
              API
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              NFT collections
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              This script interfaces with an API to provide detailed
              insights into individual NFT collections, facilitating
              informed analysis and exploration of the NFT market.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <button
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              onClick={() => handleSidebar(pythonCodeSamples.nft)}
            >
              View sample
            </button>
          </div>
        </div>

        {/* Search Algorithms Card */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-blue-200 rounded-t-xl">
            <Image
              src="/search.png"
              alt="Search Algorithms"
              width={500}
              height={210}
              className="rounded-t-xl"
            />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-rose-500">
              Search
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Algorithms
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              This Python application demonstrates both binary search and
              linear search algorithms for efficiently locating elements in
              a list.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <button
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              onClick={() => handleSidebar(pythonCodeSamples.search)}
            >
              View sample
            </button>
          </div>
        </div>

        {/* Turtle Christmas Tree Card */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl">
            <Image
              src="/tree.png"
              alt="Turtle Christmas Tree"
              width={500}
              height={210}
              className="rounded-t-xl"
            />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
              Turtle
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Christmas Tree
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              My Python script uses the Turtle graphics module to draw a
              detailed Christmas tree, complete with decorations.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <button
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              onClick={() => handleSidebar(pythonCodeSamples.tree)}
            >
              View sample
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Sidebar */}
  {sidebarOpen && (
    <div className="fixed top-0 right-0 w-1/4 h-full bg-white bg-opacity-25 backdrop-blur-lg shadow-lg overflow-y-auto transition-transform transform translate-x-0  ">
      <div className="p-4">
        <Button
          className="mb-4 p-2 bg-blue-300 text-black rounded hover:bg-blue-400 absolute left-0 top-0 m-4 h-15 w-15 bg-opacity-50 hover:bg-opacity-80"
          onClick={() => setSidebarOpen(false)}
        >
          Close
        </Button>
        <pre>
          <code
            className="python text-black "
            dangerouslySetInnerHTML={{
              __html: hljs.highlight(code, { language: "python" }).value,
            }}
          />
        </pre>
      </div>
    </div>
      )}
    </>
  );
};

export default Python;
