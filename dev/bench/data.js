window.BENCHMARK_DATA = {
  "lastUpdate": 1662431695348,
  "repoUrl": "https://github.com/caraml-dev/universal-prediction-interface",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Pradithya Aria",
            "username": "pradithya",
            "email": "pradithya.pura@go-jek.com"
          },
          "committer": {
            "name": "Pradithya Aria",
            "username": "pradithya",
            "email": "pradithya.pura@go-jek.com"
          },
          "id": "6710549802a5943d41967c640503d980d414ec55",
          "message": "Separate benchmark publishing to different job",
          "timestamp": "2022-09-05T04:03:14Z",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/6710549802a5943d41967c640503d980d414ec55"
        },
        "date": 1662353997609,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_test.py::test_serialize_proto_request[1-1]",
            "value": 90701.67264371064,
            "unit": "iter/sec",
            "range": "stddev: 0.0001338993828926077",
            "extra": "mean: 11.025155003790783 usec\nrounds: 24851"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_request[1-100]",
            "value": 3435.5217470716684,
            "unit": "iter/sec",
            "range": "stddev: 0.000703063042642006",
            "extra": "mean: 291.0766030959835 usec\nrounds: 3230"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_request[100-100]",
            "value": 36.183426681241684,
            "unit": "iter/sec",
            "range": "stddev: 0.00931485648941606",
            "extra": "mean: 27.6369623255838 msec\nrounds: 43"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_request[100-500]",
            "value": 6.904891052734057,
            "unit": "iter/sec",
            "range": "stddev: 0.03606577796662239",
            "extra": "mean: 144.82487737500804 msec\nrounds: 8"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_request[1000-100]",
            "value": 3.4090848602896076,
            "unit": "iter/sec",
            "range": "stddev: 0.0238652574441552",
            "extra": "mean: 293.33385380000436 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_request[1000-500]",
            "value": 0.815354376334346,
            "unit": "iter/sec",
            "range": "stddev: 0.09931335521747016",
            "extra": "mean: 1.2264605784000082 sec\nrounds: 5"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_request[1-1]",
            "value": 65349.82800854222,
            "unit": "iter/sec",
            "range": "stddev: 0.00023352236380507003",
            "extra": "mean: 15.302259094993866 usec\nrounds: 29769"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_request[1-100]",
            "value": 5563.034541183846,
            "unit": "iter/sec",
            "range": "stddev: 0.0007603017632508568",
            "extra": "mean: 179.75800664131668 usec\nrounds: 5722"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_request[100-100]",
            "value": 47.252682444276005,
            "unit": "iter/sec",
            "range": "stddev: 0.009661688090360497",
            "extra": "mean: 21.16281972307661 msec\nrounds: 65"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_request[100-500]",
            "value": 12.09974779195004,
            "unit": "iter/sec",
            "range": "stddev: 0.010812304045813192",
            "extra": "mean: 82.6463507499966 msec\nrounds: 12"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_request[1000-100]",
            "value": 6.574407381744875,
            "unit": "iter/sec",
            "range": "stddev: 0.01934152722564806",
            "extra": "mean: 152.10496428570812 msec\nrounds: 7"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_request[1000-500]",
            "value": 1.2877946722722688,
            "unit": "iter/sec",
            "range": "stddev: 0.06570679076668824",
            "extra": "mean: 776.5213053999787 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_response[1-1]",
            "value": 157128.30577731246,
            "unit": "iter/sec",
            "range": "stddev: 0.000006471777318256809",
            "extra": "mean: 6.3642256883825485 usec\nrounds: 58758"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_response[1-10]",
            "value": 48999.39235379684,
            "unit": "iter/sec",
            "range": "stddev: 0.000010554418113040041",
            "extra": "mean: 20.408416348912386 usec\nrounds: 37483"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_response[100-1]",
            "value": 3927.873335877115,
            "unit": "iter/sec",
            "range": "stddev: 0.00006057306465208079",
            "extra": "mean: 254.5906943755086 usec\nrounds: 3645"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_response[100-10]",
            "value": 604.0823939081453,
            "unit": "iter/sec",
            "range": "stddev: 0.00022027932099770624",
            "extra": "mean: 1.6554033192896807 msec\nrounds: 617"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_response[1000-1]",
            "value": 197.59478972931794,
            "unit": "iter/sec",
            "range": "stddev: 0.0047562257192585115",
            "extra": "mean: 5.060862188572303 msec\nrounds: 350"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_response[1000-10]",
            "value": 55.972085921124936,
            "unit": "iter/sec",
            "range": "stddev: 0.0020609536328345677",
            "extra": "mean: 17.86604846939572 msec\nrounds: 49"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_response[1-1]",
            "value": 125765.29946522713,
            "unit": "iter/sec",
            "range": "stddev: 0.000010753460159871589",
            "extra": "mean: 7.951318879310507 usec\nrounds: 41188"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_response[1-10]",
            "value": 53168.30009449191,
            "unit": "iter/sec",
            "range": "stddev: 0.000011398600075391741",
            "extra": "mean: 18.808199589281156 usec\nrounds: 27266"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_response[100-1]",
            "value": 4945.349208627653,
            "unit": "iter/sec",
            "range": "stddev: 0.00006465398827110314",
            "extra": "mean: 202.21018937457453 usec\nrounds: 3068"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_response[100-10]",
            "value": 841.2934919429301,
            "unit": "iter/sec",
            "range": "stddev: 0.00026818665829435865",
            "extra": "mean: 1.1886458288064778 msec\nrounds: 368"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_response[1000-1]",
            "value": 516.4495003998223,
            "unit": "iter/sec",
            "range": "stddev: 0.0002966661949550336",
            "extra": "mean: 1.9362977391319478 msec\nrounds: 460"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_response[1000-10]",
            "value": 71.16029586644706,
            "unit": "iter/sec",
            "range": "stddev: 0.0006353898834331019",
            "extra": "mean: 14.052780245275965 msec\nrounds: 53"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_request[1-1]",
            "value": 239437.7627663837,
            "unit": "iter/sec",
            "range": "stddev: 0.000005574814550439928",
            "extra": "mean: 4.176450650249714 usec\nrounds: 28916"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_request[1-100]",
            "value": 17129.878081916693,
            "unit": "iter/sec",
            "range": "stddev: 0.000019715309053240766",
            "extra": "mean: 58.37753165655386 usec\nrounds: 14515"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_request[100-100]",
            "value": 162.19223844439037,
            "unit": "iter/sec",
            "range": "stddev: 0.00027133715859006737",
            "extra": "mean: 6.165523144579217 msec\nrounds: 166"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_request[100-500]",
            "value": 30.06188101048387,
            "unit": "iter/sec",
            "range": "stddev: 0.0020268498471022072",
            "extra": "mean: 33.264718187503206 msec\nrounds: 32"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_request[1000-100]",
            "value": 13.453199483663711,
            "unit": "iter/sec",
            "range": "stddev: 0.012036783755643031",
            "extra": "mean: 74.33176035294095 msec\nrounds: 17"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_request[1000-500]",
            "value": 2.7644711418391577,
            "unit": "iter/sec",
            "range": "stddev: 0.011823942400637928",
            "extra": "mean: 361.73284100000274 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_request[1-1]",
            "value": 138970.944311493,
            "unit": "iter/sec",
            "range": "stddev: 0.000008319567995044403",
            "extra": "mean: 7.1957487585216 usec\nrounds: 35050"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_request[1-100]",
            "value": 11988.8848836882,
            "unit": "iter/sec",
            "range": "stddev: 0.000024680774649263065",
            "extra": "mean: 83.410593203758 usec\nrounds: 7328"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_request[100-100]",
            "value": 110.70004380732105,
            "unit": "iter/sec",
            "range": "stddev: 0.0023539977621740878",
            "extra": "mean: 9.033420092773856 msec\nrounds: 97"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_request[100-500]",
            "value": 21.27616707769911,
            "unit": "iter/sec",
            "range": "stddev: 0.005612410613269005",
            "extra": "mean: 47.00094694444109 msec\nrounds: 18"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_request[1000-100]",
            "value": 8.928477892135339,
            "unit": "iter/sec",
            "range": "stddev: 0.007455240739904511",
            "extra": "mean: 112.00117333334623 msec\nrounds: 9"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_request[1000-500]",
            "value": 1.7044096084513083,
            "unit": "iter/sec",
            "range": "stddev: 0.06983589565435111",
            "extra": "mean: 586.7134255999872 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_response[1-1]",
            "value": 269406.41521516454,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022134556684011334",
            "extra": "mean: 3.711864096485373 usec\nrounds: 68762"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_response[1-10]",
            "value": 103927.65337615504,
            "unit": "iter/sec",
            "range": "stddev: 0.000016421118316834653",
            "extra": "mean: 9.622078123717532 usec\nrounds: 56935"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_response[100-1]",
            "value": 9381.573635840674,
            "unit": "iter/sec",
            "range": "stddev: 0.00001726439869706886",
            "extra": "mean: 106.5919257063307 usec\nrounds: 6932"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_response[100-10]",
            "value": 1717.1838230519515,
            "unit": "iter/sec",
            "range": "stddev: 0.00008055697140450854",
            "extra": "mean: 582.348835678349 usec\nrounds: 1564"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_response[1000-1]",
            "value": 840.3098927470138,
            "unit": "iter/sec",
            "range": "stddev: 0.00035684874605187435",
            "extra": "mean: 1.190037162041436 msec\nrounds: 901"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_response[1000-10]",
            "value": 160.06514838928427,
            "unit": "iter/sec",
            "range": "stddev: 0.0004301508050866545",
            "extra": "mean: 6.247456176830971 msec\nrounds: 164"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_response[1-1]",
            "value": 176382.73870950378,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033114484336745745",
            "extra": "mean: 5.6694890175561055 usec\nrounds: 54360"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_response[1-10]",
            "value": 89531.64325761207,
            "unit": "iter/sec",
            "range": "stddev: 0.000004689674473632212",
            "extra": "mean: 11.16923540789562 usec\nrounds: 44922"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_response[100-1]",
            "value": 9022.419668032951,
            "unit": "iter/sec",
            "range": "stddev: 0.000012059399469687176",
            "extra": "mean: 110.8350128672321 usec\nrounds: 544"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_response[100-10]",
            "value": 1396.161120636013,
            "unit": "iter/sec",
            "range": "stddev: 0.00034166885151164705",
            "extra": "mean: 716.2497115980825 usec\nrounds: 1328"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_response[1000-1]",
            "value": 526.8016241240026,
            "unit": "iter/sec",
            "range": "stddev: 0.0021054307682332346",
            "extra": "mean: 1.898247754385458 msec\nrounds: 57"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_response[1000-10]",
            "value": 104.59253019380449,
            "unit": "iter/sec",
            "range": "stddev: 0.00477788916039569",
            "extra": "mean: 9.560912219515602 msec\nrounds: 41"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pradithya.pura@go-jek.com",
            "name": "Pradithya Aria",
            "username": "pradithya"
          },
          "committer": {
            "email": "pradithya.pura@go-jek.com",
            "name": "Pradithya Aria",
            "username": "pradithya"
          },
          "distinct": true,
          "id": "2acf755c8465bfd9da52b231499b9b0f1afd21ca",
          "message": "Change target branch to main",
          "timestamp": "2022-09-06T10:32:46+08:00",
          "tree_id": "2d5771219529dbf6c6e9a2b3aa57094f0428c44b",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/2acf755c8465bfd9da52b231499b9b0f1afd21ca"
        },
        "date": 1662431693653,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_test.py::test_serialize_proto_request[1-1]",
            "value": 160589.30370902776,
            "unit": "iter/sec",
            "range": "stddev: 0.000014567082672091139",
            "extra": "mean: 6.227064797615058 usec\nrounds: 23149"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_request[1-100]",
            "value": 6581.019272914134,
            "unit": "iter/sec",
            "range": "stddev: 0.00003792957806595701",
            "extra": "mean: 151.95214578929367 usec\nrounds: 4287"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_request[100-100]",
            "value": 69.2216333186369,
            "unit": "iter/sec",
            "range": "stddev: 0.0005895037481593136",
            "extra": "mean: 14.446350830770774 msec\nrounds: 65"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_request[100-500]",
            "value": 13.946759641890047,
            "unit": "iter/sec",
            "range": "stddev: 0.002087548388751102",
            "extra": "mean: 71.70124284614697 msec\nrounds: 13"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_request[1000-100]",
            "value": 6.334510801250633,
            "unit": "iter/sec",
            "range": "stddev: 0.00432656670531651",
            "extra": "mean: 157.8653871428506 msec\nrounds: 7"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_request[1000-500]",
            "value": 1.329524196873725,
            "unit": "iter/sec",
            "range": "stddev: 0.01204100481741847",
            "extra": "mean: 752.1487779999973 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_request[1-1]",
            "value": 122930.03210387619,
            "unit": "iter/sec",
            "range": "stddev: 0.00001503562519656599",
            "extra": "mean: 8.13470868660473 usec\nrounds: 20284"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_request[1-100]",
            "value": 7430.546938919782,
            "unit": "iter/sec",
            "range": "stddev: 0.00004319746419187756",
            "extra": "mean: 134.57959531379734 usec\nrounds: 4396"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_request[100-100]",
            "value": 70.57005854854613,
            "unit": "iter/sec",
            "range": "stddev: 0.0008746767034858808",
            "extra": "mean: 14.170315578129866 msec\nrounds: 64"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_request[100-500]",
            "value": 14.210306669856395,
            "unit": "iter/sec",
            "range": "stddev: 0.001523122402881593",
            "extra": "mean: 70.37145807143271 msec\nrounds: 14"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_request[1000-100]",
            "value": 6.901445535767762,
            "unit": "iter/sec",
            "range": "stddev: 0.0025851753420757205",
            "extra": "mean: 144.8971805714255 msec\nrounds: 7"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_request[1000-500]",
            "value": 1.2824396261440674,
            "unit": "iter/sec",
            "range": "stddev: 0.011373367091020438",
            "extra": "mean: 779.763803000003 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_response[1-1]",
            "value": 165719.07506785376,
            "unit": "iter/sec",
            "range": "stddev: 0.000012437977755355985",
            "extra": "mean: 6.03430835943629 usec\nrounds: 48077"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_response[1-10]",
            "value": 50368.02529388455,
            "unit": "iter/sec",
            "range": "stddev: 0.000024542226182261742",
            "extra": "mean: 19.853865506246386 usec\nrounds: 39526"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_response[100-1]",
            "value": 3804.7336123091786,
            "unit": "iter/sec",
            "range": "stddev: 0.0002167317576977844",
            "extra": "mean: 262.8304900939116 usec\nrounds: 2877"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_response[100-10]",
            "value": 634.5720911791216,
            "unit": "iter/sec",
            "range": "stddev: 0.00022853393894508222",
            "extra": "mean: 1.5758650812106527 msec\nrounds: 628"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_response[1000-1]",
            "value": 390.21583277182197,
            "unit": "iter/sec",
            "range": "stddev: 0.00026613025358491614",
            "extra": "mean: 2.562684330096745 msec\nrounds: 309"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_proto_response[1000-10]",
            "value": 62.66780003724968,
            "unit": "iter/sec",
            "range": "stddev: 0.0009894702517516207",
            "extra": "mean: 15.957158212121712 msec\nrounds: 66"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_response[1-1]",
            "value": 113905.00069303572,
            "unit": "iter/sec",
            "range": "stddev: 0.00002314783004342328",
            "extra": "mean: 8.77924580936455 usec\nrounds: 34722"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_response[1-10]",
            "value": 46542.668803838205,
            "unit": "iter/sec",
            "range": "stddev: 0.00001827419669994975",
            "extra": "mean: 21.485660915034025 usec\nrounds: 20284"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_response[100-1]",
            "value": 4264.125954449437,
            "unit": "iter/sec",
            "range": "stddev: 0.00005799708371552482",
            "extra": "mean: 234.51464864834537 usec\nrounds: 2627"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_response[100-10]",
            "value": 744.3012075981807,
            "unit": "iter/sec",
            "range": "stddev: 0.00020081287829292458",
            "extra": "mean: 1.3435420899382193 msec\nrounds: 656"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_response[1000-1]",
            "value": 443.2379754432237,
            "unit": "iter/sec",
            "range": "stddev: 0.00032727027111874893",
            "extra": "mean: 2.2561243742710273 msec\nrounds: 342"
          },
          {
            "name": "test/benchmark_test.py::test_serialize_json_response[1000-10]",
            "value": 64.92569545748778,
            "unit": "iter/sec",
            "range": "stddev: 0.0009808461931856225",
            "extra": "mean: 15.402222385970171 msec\nrounds: 57"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_request[1-1]",
            "value": 299190.95710168424,
            "unit": "iter/sec",
            "range": "stddev: 0.00002426320844676312",
            "extra": "mean: 3.3423470070324885 usec\nrounds: 65356"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_request[1-100]",
            "value": 18081.47089571551,
            "unit": "iter/sec",
            "range": "stddev: 0.000027787722214907748",
            "extra": "mean: 55.30523516407919 usec\nrounds: 15385"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_request[100-100]",
            "value": 163.36038869063364,
            "unit": "iter/sec",
            "range": "stddev: 0.0004420351277877254",
            "extra": "mean: 6.121434994218617 msec\nrounds: 173"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_request[100-500]",
            "value": 31.86748205865675,
            "unit": "iter/sec",
            "range": "stddev: 0.001427827949560416",
            "extra": "mean: 31.379950199998675 msec\nrounds: 35"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_request[1000-100]",
            "value": 15.566158052797912,
            "unit": "iter/sec",
            "range": "stddev: 0.0025421347711698816",
            "extra": "mean: 64.24192768749748 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_request[1000-500]",
            "value": 2.6792323765398294,
            "unit": "iter/sec",
            "range": "stddev: 0.009463275040572143",
            "extra": "mean: 373.2412345999933 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_request[1-1]",
            "value": 143073.66796775803,
            "unit": "iter/sec",
            "range": "stddev: 0.00003076921420223886",
            "extra": "mean: 6.989406326154666 usec\nrounds: 27473"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_request[1-100]",
            "value": 10876.183118026696,
            "unit": "iter/sec",
            "range": "stddev: 0.00011569605166634263",
            "extra": "mean: 91.94402017216437 usec\nrounds: 5453"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_request[100-100]",
            "value": 110.08689563178139,
            "unit": "iter/sec",
            "range": "stddev: 0.00192911051340432",
            "extra": "mean: 9.083733302325099 msec\nrounds: 86"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_request[100-500]",
            "value": 19.702633496968367,
            "unit": "iter/sec",
            "range": "stddev: 0.00416475853554577",
            "extra": "mean: 50.75463643750311 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_request[1000-100]",
            "value": 6.902546689078569,
            "unit": "iter/sec",
            "range": "stddev: 0.011213426389095511",
            "extra": "mean: 144.87406533334024 msec\nrounds: 9"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_request[1000-500]",
            "value": 1.5378370602126932,
            "unit": "iter/sec",
            "range": "stddev: 0.030526377256273544",
            "extra": "mean: 650.2639491999844 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_response[1-1]",
            "value": 292409.2392586334,
            "unit": "iter/sec",
            "range": "stddev: 0.00003359837212783613",
            "extra": "mean: 3.419864579297745 usec\nrounds: 58477"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_response[1-10]",
            "value": 127946.70468126897,
            "unit": "iter/sec",
            "range": "stddev: 0.000010196263309719706",
            "extra": "mean: 7.815754243074282 usec\nrounds: 57801"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_response[100-1]",
            "value": 9265.558385102737,
            "unit": "iter/sec",
            "range": "stddev: 0.00003664568896336106",
            "extra": "mean: 107.92657694627565 usec\nrounds: 8285"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_response[100-10]",
            "value": 1617.5441042298135,
            "unit": "iter/sec",
            "range": "stddev: 0.0001523316532481797",
            "extra": "mean: 618.22116465637 usec\nrounds: 1658"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_response[1000-1]",
            "value": 682.8769112016957,
            "unit": "iter/sec",
            "range": "stddev: 0.00021179345832084446",
            "extra": "mean: 1.4643927530662082 msec\nrounds: 652"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_proto_response[1000-10]",
            "value": 128.75470576426216,
            "unit": "iter/sec",
            "range": "stddev: 0.0007752676446299659",
            "extra": "mean: 7.766706421052342 msec\nrounds: 152"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_response[1-1]",
            "value": 152920.23654636674,
            "unit": "iter/sec",
            "range": "stddev: 0.00002753393656194449",
            "extra": "mean: 6.539356873782963 usec\nrounds: 23364"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_response[1-10]",
            "value": 71821.27200825448,
            "unit": "iter/sec",
            "range": "stddev: 0.000026167665085953496",
            "extra": "mean: 13.923451535153388 usec\nrounds: 35211"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_response[100-1]",
            "value": 6267.439118824647,
            "unit": "iter/sec",
            "range": "stddev: 0.00004907565311093181",
            "extra": "mean: 159.5548007792269 usec\nrounds: 512"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_response[100-10]",
            "value": 975.0993383197721,
            "unit": "iter/sec",
            "range": "stddev: 0.0008340569906180887",
            "extra": "mean: 1.0255365383829869 msec\nrounds: 964"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_response[1000-1]",
            "value": 497.1131937914545,
            "unit": "iter/sec",
            "range": "stddev: 0.0026035954649345325",
            "extra": "mean: 2.0116142811922897 msec\nrounds: 537"
          },
          {
            "name": "test/benchmark_test.py::test_deserialize_json_response[1000-10]",
            "value": 86.84465862002882,
            "unit": "iter/sec",
            "range": "stddev: 0.005846613722205451",
            "extra": "mean: 11.514812953267478 msec\nrounds: 107"
          }
        ]
      }
    ]
  }
}