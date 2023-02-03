window.BENCHMARK_DATA = {
  "lastUpdate": 1675398075234,
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
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 90701.67264371064,
            "unit": "iter/sec",
            "range": "stddev: 0.0001338993828926077",
            "extra": "mean: 11.025155003790783 usec\nrounds: 24851"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 3435.5217470716684,
            "unit": "iter/sec",
            "range": "stddev: 0.000703063042642006",
            "extra": "mean: 291.0766030959835 usec\nrounds: 3230"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 36.183426681241684,
            "unit": "iter/sec",
            "range": "stddev: 0.00931485648941606",
            "extra": "mean: 27.6369623255838 msec\nrounds: 43"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 6.904891052734057,
            "unit": "iter/sec",
            "range": "stddev: 0.03606577796662239",
            "extra": "mean: 144.82487737500804 msec\nrounds: 8"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 3.4090848602896076,
            "unit": "iter/sec",
            "range": "stddev: 0.0238652574441552",
            "extra": "mean: 293.33385380000436 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 0.815354376334346,
            "unit": "iter/sec",
            "range": "stddev: 0.09931335521747016",
            "extra": "mean: 1.2264605784000082 sec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 65349.82800854222,
            "unit": "iter/sec",
            "range": "stddev: 0.00023352236380507003",
            "extra": "mean: 15.302259094993866 usec\nrounds: 29769"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 5563.034541183846,
            "unit": "iter/sec",
            "range": "stddev: 0.0007603017632508568",
            "extra": "mean: 179.75800664131668 usec\nrounds: 5722"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 47.252682444276005,
            "unit": "iter/sec",
            "range": "stddev: 0.009661688090360497",
            "extra": "mean: 21.16281972307661 msec\nrounds: 65"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 12.09974779195004,
            "unit": "iter/sec",
            "range": "stddev: 0.010812304045813192",
            "extra": "mean: 82.6463507499966 msec\nrounds: 12"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 6.574407381744875,
            "unit": "iter/sec",
            "range": "stddev: 0.01934152722564806",
            "extra": "mean: 152.10496428570812 msec\nrounds: 7"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 1.2877946722722688,
            "unit": "iter/sec",
            "range": "stddev: 0.06570679076668824",
            "extra": "mean: 776.5213053999787 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 157128.30577731246,
            "unit": "iter/sec",
            "range": "stddev: 0.000006471777318256809",
            "extra": "mean: 6.3642256883825485 usec\nrounds: 58758"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 48999.39235379684,
            "unit": "iter/sec",
            "range": "stddev: 0.000010554418113040041",
            "extra": "mean: 20.408416348912386 usec\nrounds: 37483"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 3927.873335877115,
            "unit": "iter/sec",
            "range": "stddev: 0.00006057306465208079",
            "extra": "mean: 254.5906943755086 usec\nrounds: 3645"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 604.0823939081453,
            "unit": "iter/sec",
            "range": "stddev: 0.00022027932099770624",
            "extra": "mean: 1.6554033192896807 msec\nrounds: 617"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 197.59478972931794,
            "unit": "iter/sec",
            "range": "stddev: 0.0047562257192585115",
            "extra": "mean: 5.060862188572303 msec\nrounds: 350"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 55.972085921124936,
            "unit": "iter/sec",
            "range": "stddev: 0.0020609536328345677",
            "extra": "mean: 17.86604846939572 msec\nrounds: 49"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 125765.29946522713,
            "unit": "iter/sec",
            "range": "stddev: 0.000010753460159871589",
            "extra": "mean: 7.951318879310507 usec\nrounds: 41188"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 53168.30009449191,
            "unit": "iter/sec",
            "range": "stddev: 0.000011398600075391741",
            "extra": "mean: 18.808199589281156 usec\nrounds: 27266"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 4945.349208627653,
            "unit": "iter/sec",
            "range": "stddev: 0.00006465398827110314",
            "extra": "mean: 202.21018937457453 usec\nrounds: 3068"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 841.2934919429301,
            "unit": "iter/sec",
            "range": "stddev: 0.00026818665829435865",
            "extra": "mean: 1.1886458288064778 msec\nrounds: 368"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 516.4495003998223,
            "unit": "iter/sec",
            "range": "stddev: 0.0002966661949550336",
            "extra": "mean: 1.9362977391319478 msec\nrounds: 460"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 71.16029586644706,
            "unit": "iter/sec",
            "range": "stddev: 0.0006353898834331019",
            "extra": "mean: 14.052780245275965 msec\nrounds: 53"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 239437.7627663837,
            "unit": "iter/sec",
            "range": "stddev: 0.000005574814550439928",
            "extra": "mean: 4.176450650249714 usec\nrounds: 28916"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 17129.878081916693,
            "unit": "iter/sec",
            "range": "stddev: 0.000019715309053240766",
            "extra": "mean: 58.37753165655386 usec\nrounds: 14515"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 162.19223844439037,
            "unit": "iter/sec",
            "range": "stddev: 0.00027133715859006737",
            "extra": "mean: 6.165523144579217 msec\nrounds: 166"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 30.06188101048387,
            "unit": "iter/sec",
            "range": "stddev: 0.0020268498471022072",
            "extra": "mean: 33.264718187503206 msec\nrounds: 32"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 13.453199483663711,
            "unit": "iter/sec",
            "range": "stddev: 0.012036783755643031",
            "extra": "mean: 74.33176035294095 msec\nrounds: 17"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 2.7644711418391577,
            "unit": "iter/sec",
            "range": "stddev: 0.011823942400637928",
            "extra": "mean: 361.73284100000274 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 138970.944311493,
            "unit": "iter/sec",
            "range": "stddev: 0.000008319567995044403",
            "extra": "mean: 7.1957487585216 usec\nrounds: 35050"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 11988.8848836882,
            "unit": "iter/sec",
            "range": "stddev: 0.000024680774649263065",
            "extra": "mean: 83.410593203758 usec\nrounds: 7328"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 110.70004380732105,
            "unit": "iter/sec",
            "range": "stddev: 0.0023539977621740878",
            "extra": "mean: 9.033420092773856 msec\nrounds: 97"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 21.27616707769911,
            "unit": "iter/sec",
            "range": "stddev: 0.005612410613269005",
            "extra": "mean: 47.00094694444109 msec\nrounds: 18"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 8.928477892135339,
            "unit": "iter/sec",
            "range": "stddev: 0.007455240739904511",
            "extra": "mean: 112.00117333334623 msec\nrounds: 9"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 1.7044096084513083,
            "unit": "iter/sec",
            "range": "stddev: 0.06983589565435111",
            "extra": "mean: 586.7134255999872 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 269406.41521516454,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022134556684011334",
            "extra": "mean: 3.711864096485373 usec\nrounds: 68762"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 103927.65337615504,
            "unit": "iter/sec",
            "range": "stddev: 0.000016421118316834653",
            "extra": "mean: 9.622078123717532 usec\nrounds: 56935"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 9381.573635840674,
            "unit": "iter/sec",
            "range": "stddev: 0.00001726439869706886",
            "extra": "mean: 106.5919257063307 usec\nrounds: 6932"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 1717.1838230519515,
            "unit": "iter/sec",
            "range": "stddev: 0.00008055697140450854",
            "extra": "mean: 582.348835678349 usec\nrounds: 1564"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 840.3098927470138,
            "unit": "iter/sec",
            "range": "stddev: 0.00035684874605187435",
            "extra": "mean: 1.190037162041436 msec\nrounds: 901"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 160.06514838928427,
            "unit": "iter/sec",
            "range": "stddev: 0.0004301508050866545",
            "extra": "mean: 6.247456176830971 msec\nrounds: 164"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 176382.73870950378,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033114484336745745",
            "extra": "mean: 5.6694890175561055 usec\nrounds: 54360"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 89531.64325761207,
            "unit": "iter/sec",
            "range": "stddev: 0.000004689674473632212",
            "extra": "mean: 11.16923540789562 usec\nrounds: 44922"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 9022.419668032951,
            "unit": "iter/sec",
            "range": "stddev: 0.000012059399469687176",
            "extra": "mean: 110.8350128672321 usec\nrounds: 544"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 1396.161120636013,
            "unit": "iter/sec",
            "range": "stddev: 0.00034166885151164705",
            "extra": "mean: 716.2497115980825 usec\nrounds: 1328"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 526.8016241240026,
            "unit": "iter/sec",
            "range": "stddev: 0.0021054307682332346",
            "extra": "mean: 1.898247754385458 msec\nrounds: 57"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
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
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 160589.30370902776,
            "unit": "iter/sec",
            "range": "stddev: 0.000014567082672091139",
            "extra": "mean: 6.227064797615058 usec\nrounds: 23149"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 6581.019272914134,
            "unit": "iter/sec",
            "range": "stddev: 0.00003792957806595701",
            "extra": "mean: 151.95214578929367 usec\nrounds: 4287"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 69.2216333186369,
            "unit": "iter/sec",
            "range": "stddev: 0.0005895037481593136",
            "extra": "mean: 14.446350830770774 msec\nrounds: 65"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 13.946759641890047,
            "unit": "iter/sec",
            "range": "stddev: 0.002087548388751102",
            "extra": "mean: 71.70124284614697 msec\nrounds: 13"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 6.334510801250633,
            "unit": "iter/sec",
            "range": "stddev: 0.00432656670531651",
            "extra": "mean: 157.8653871428506 msec\nrounds: 7"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 1.329524196873725,
            "unit": "iter/sec",
            "range": "stddev: 0.01204100481741847",
            "extra": "mean: 752.1487779999973 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 122930.03210387619,
            "unit": "iter/sec",
            "range": "stddev: 0.00001503562519656599",
            "extra": "mean: 8.13470868660473 usec\nrounds: 20284"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 7430.546938919782,
            "unit": "iter/sec",
            "range": "stddev: 0.00004319746419187756",
            "extra": "mean: 134.57959531379734 usec\nrounds: 4396"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 70.57005854854613,
            "unit": "iter/sec",
            "range": "stddev: 0.0008746767034858808",
            "extra": "mean: 14.170315578129866 msec\nrounds: 64"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 14.210306669856395,
            "unit": "iter/sec",
            "range": "stddev: 0.001523122402881593",
            "extra": "mean: 70.37145807143271 msec\nrounds: 14"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 6.901445535767762,
            "unit": "iter/sec",
            "range": "stddev: 0.0025851753420757205",
            "extra": "mean: 144.8971805714255 msec\nrounds: 7"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 1.2824396261440674,
            "unit": "iter/sec",
            "range": "stddev: 0.011373367091020438",
            "extra": "mean: 779.763803000003 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 165719.07506785376,
            "unit": "iter/sec",
            "range": "stddev: 0.000012437977755355985",
            "extra": "mean: 6.03430835943629 usec\nrounds: 48077"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 50368.02529388455,
            "unit": "iter/sec",
            "range": "stddev: 0.000024542226182261742",
            "extra": "mean: 19.853865506246386 usec\nrounds: 39526"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 3804.7336123091786,
            "unit": "iter/sec",
            "range": "stddev: 0.0002167317576977844",
            "extra": "mean: 262.8304900939116 usec\nrounds: 2877"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 634.5720911791216,
            "unit": "iter/sec",
            "range": "stddev: 0.00022853393894508222",
            "extra": "mean: 1.5758650812106527 msec\nrounds: 628"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 390.21583277182197,
            "unit": "iter/sec",
            "range": "stddev: 0.00026613025358491614",
            "extra": "mean: 2.562684330096745 msec\nrounds: 309"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 62.66780003724968,
            "unit": "iter/sec",
            "range": "stddev: 0.0009894702517516207",
            "extra": "mean: 15.957158212121712 msec\nrounds: 66"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 113905.00069303572,
            "unit": "iter/sec",
            "range": "stddev: 0.00002314783004342328",
            "extra": "mean: 8.77924580936455 usec\nrounds: 34722"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 46542.668803838205,
            "unit": "iter/sec",
            "range": "stddev: 0.00001827419669994975",
            "extra": "mean: 21.485660915034025 usec\nrounds: 20284"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 4264.125954449437,
            "unit": "iter/sec",
            "range": "stddev: 0.00005799708371552482",
            "extra": "mean: 234.51464864834537 usec\nrounds: 2627"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 744.3012075981807,
            "unit": "iter/sec",
            "range": "stddev: 0.00020081287829292458",
            "extra": "mean: 1.3435420899382193 msec\nrounds: 656"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 443.2379754432237,
            "unit": "iter/sec",
            "range": "stddev: 0.00032727027111874893",
            "extra": "mean: 2.2561243742710273 msec\nrounds: 342"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 64.92569545748778,
            "unit": "iter/sec",
            "range": "stddev: 0.0009808461931856225",
            "extra": "mean: 15.402222385970171 msec\nrounds: 57"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 299190.95710168424,
            "unit": "iter/sec",
            "range": "stddev: 0.00002426320844676312",
            "extra": "mean: 3.3423470070324885 usec\nrounds: 65356"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 18081.47089571551,
            "unit": "iter/sec",
            "range": "stddev: 0.000027787722214907748",
            "extra": "mean: 55.30523516407919 usec\nrounds: 15385"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 163.36038869063364,
            "unit": "iter/sec",
            "range": "stddev: 0.0004420351277877254",
            "extra": "mean: 6.121434994218617 msec\nrounds: 173"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 31.86748205865675,
            "unit": "iter/sec",
            "range": "stddev: 0.001427827949560416",
            "extra": "mean: 31.379950199998675 msec\nrounds: 35"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 15.566158052797912,
            "unit": "iter/sec",
            "range": "stddev: 0.0025421347711698816",
            "extra": "mean: 64.24192768749748 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 2.6792323765398294,
            "unit": "iter/sec",
            "range": "stddev: 0.009463275040572143",
            "extra": "mean: 373.2412345999933 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 143073.66796775803,
            "unit": "iter/sec",
            "range": "stddev: 0.00003076921420223886",
            "extra": "mean: 6.989406326154666 usec\nrounds: 27473"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 10876.183118026696,
            "unit": "iter/sec",
            "range": "stddev: 0.00011569605166634263",
            "extra": "mean: 91.94402017216437 usec\nrounds: 5453"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 110.08689563178139,
            "unit": "iter/sec",
            "range": "stddev: 0.00192911051340432",
            "extra": "mean: 9.083733302325099 msec\nrounds: 86"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 19.702633496968367,
            "unit": "iter/sec",
            "range": "stddev: 0.00416475853554577",
            "extra": "mean: 50.75463643750311 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 6.902546689078569,
            "unit": "iter/sec",
            "range": "stddev: 0.011213426389095511",
            "extra": "mean: 144.87406533334024 msec\nrounds: 9"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 1.5378370602126932,
            "unit": "iter/sec",
            "range": "stddev: 0.030526377256273544",
            "extra": "mean: 650.2639491999844 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 292409.2392586334,
            "unit": "iter/sec",
            "range": "stddev: 0.00003359837212783613",
            "extra": "mean: 3.419864579297745 usec\nrounds: 58477"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 127946.70468126897,
            "unit": "iter/sec",
            "range": "stddev: 0.000010196263309719706",
            "extra": "mean: 7.815754243074282 usec\nrounds: 57801"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 9265.558385102737,
            "unit": "iter/sec",
            "range": "stddev: 0.00003664568896336106",
            "extra": "mean: 107.92657694627565 usec\nrounds: 8285"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 1617.5441042298135,
            "unit": "iter/sec",
            "range": "stddev: 0.0001523316532481797",
            "extra": "mean: 618.22116465637 usec\nrounds: 1658"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 682.8769112016957,
            "unit": "iter/sec",
            "range": "stddev: 0.00021179345832084446",
            "extra": "mean: 1.4643927530662082 msec\nrounds: 652"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 128.75470576426216,
            "unit": "iter/sec",
            "range": "stddev: 0.0007752676446299659",
            "extra": "mean: 7.766706421052342 msec\nrounds: 152"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 152920.23654636674,
            "unit": "iter/sec",
            "range": "stddev: 0.00002753393656194449",
            "extra": "mean: 6.539356873782963 usec\nrounds: 23364"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 71821.27200825448,
            "unit": "iter/sec",
            "range": "stddev: 0.000026167665085953496",
            "extra": "mean: 13.923451535153388 usec\nrounds: 35211"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 6267.439118824647,
            "unit": "iter/sec",
            "range": "stddev: 0.00004907565311093181",
            "extra": "mean: 159.5548007792269 usec\nrounds: 512"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 975.0993383197721,
            "unit": "iter/sec",
            "range": "stddev: 0.0008340569906180887",
            "extra": "mean: 1.0255365383829869 msec\nrounds: 964"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 497.1131937914545,
            "unit": "iter/sec",
            "range": "stddev: 0.0026035954649345325",
            "extra": "mean: 2.0116142811922897 msec\nrounds: 537"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 86.84465862002882,
            "unit": "iter/sec",
            "range": "stddev: 0.005846613722205451",
            "extra": "mean: 11.514812953267478 msec\nrounds: 107"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pradithya.pura@go-jek.com",
            "name": "aria",
            "username": "pradithya"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8fbb12ddbc0e7f88d822d36ef685ef6c56475ca3",
          "message": "UPI Interface Update (#6)\n\nMotivated by the need for more flexible data passing mechanism and more\r\nefficient interface definition for large message we introduces following\r\nchanges in this PR:\r\n\r\n### Introduction of `Table` data structure\r\n\r\n\r\n[Table](https://github.com/caraml-dev/universal-prediction-interface/blob/ac3775c5d81b461ce29d75e84aed70739091e801/proto/caraml/upi/v1/table.proto)\r\nrepresents dataframe-like data structure in row-based format. Table has\r\nfollowing specifications:\r\n- Table consists of one or more columns that potentially can have\r\ndifferent type.\r\n- All values within a column must have same type. \r\n- A cell value can be null.\r\n- A row within a table has `row_id` (similar purpose to `row_id` in the\r\nPredictionRow)\r\n\r\n### Replace `prediction_rows` in the request and\r\n`prediction_result_rows` in the response to use`Table` definition\r\n\r\n`prediction_rows` and `prediction_result_rows` are technically a\r\ndataframe-like object which can be represented as a `Table`\r\n\r\n\r\nDeserialization performance is improved significantly by at least 2x for\r\nvarious message size.\r\nNOTE: `0001_7467c7b` is the existing interface whereas `0002_ac3775c` is\r\nwith the changes.\r\n\r\n```\r\n--------------------------------------------------------------------------------------------------------- benchmark 'deserialize-request': 24 tests ----------------------------------------------------------------------------------------------------------\r\nName (time in us)                                                    Min                     Max                    Mean                 StdDev                  Median                    IQR            Outliers           OPS            Rounds  Iterations\r\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\r\ntest_deserialize_proto_request[1-100] (0001_7467c7b)             41.9270 (16.13)      1,842.2130 (23.02)         52.1732 (17.22)        23.2068 (14.41)         45.3840 (15.89)         5.5505 (42.37)   1526;4056   19,166.9311 (0.06)      20015           1\r\ntest_deserialize_proto_request[1-100] (0002_ac3775c)             86.1700 (33.16)        377.9210 (4.72)          90.9080 (30.00)        11.1573 (6.93)          89.3640 (31.29)         3.1950 (24.39)     400;602   11,000.1373 (0.03)      10065           1\r\ntest_deserialize_proto_request[1-1] (0001_7467c7b)                2.5990 (1.0)          114.4450 (1.43)           3.0305 (1.0)           1.6895 (1.05)           2.8560 (1.0)           0.1310 (1.0)      332;6541  329,980.4986 (1.0)       49461           1\r\ntest_deserialize_proto_request[1-1] (0002_ac3775c)                4.6710 (1.80)          80.0310 (1.0)            5.1638 (1.70)          1.8626 (1.16)           5.0190 (1.76)          0.1610 (1.23)     564;1018  193,656.7518 (0.59)      42838           1\r\ntest_deserialize_proto_request[100-100] (0001_7467c7b)        4,181.3790 (>1000.0)    9,231.8540 (115.35)     5,351.1642 (>1000.0)     840.1283 (521.74)     5,403.3230 (>1000.0)   1,300.7730 (>1000.0)      60;4      186.8752 (0.00)        222           1\r\ntest_deserialize_proto_request[100-100] (0002_ac3775c)        3,081.5200 (>1000.0)    3,685.8110 (46.05)      3,180.9798 (>1000.0)      77.3511 (48.04)      3,162.0330 (>1000.0)      68.3450 (521.72)      35;16      314.3686 (0.00)        318           1\r\ntest_deserialize_proto_request[100-500] (0001_7467c7b)       22,122.4090 (>1000.0)   32,973.5540 (412.01)    26,359.4216 (>1000.0)   3,763.7983 (>1000.0)   24,061.2560 (>1000.0)   7,077.2085 (>1000.0)      10;0       37.9371 (0.00)         33           1\r\ntest_deserialize_proto_request[100-500] (0002_ac3775c)       15,255.4400 (>1000.0)   18,528.7330 (231.52)    16,450.6710 (>1000.0)     731.7893 (454.46)    16,373.3630 (>1000.0)     956.3830 (>1000.0)      16;2       60.7878 (0.00)         63           1\r\ntest_deserialize_proto_request[1000-100] (0001_7467c7b)      51,576.9360 (>1000.0)   84,187.4340 (>1000.0)   59,984.9779 (>1000.0)   8,331.1790 (>1000.0)   56,792.5575 (>1000.0)  12,483.7885 (>1000.0)       3;0       16.6708 (0.00)         20           1\r\ntest_deserialize_proto_request[1000-100] (0002_ac3775c)      33,100.3810 (>1000.0)   37,188.7500 (464.68)    35,079.6140 (>1000.0)   1,019.7075 (633.26)    35,332.1615 (>1000.0)   1,445.7335 (>1000.0)       9;0       28.5066 (0.00)         28           1\r\ntest_deserialize_proto_request[1000-500] (0001_7467c7b)     251,937.1810 (>1000.0)  327,753.4200 (>1000.0)  294,796.8826 (>1000.0)  36,910.2596 (>1000.0)  314,206.2790 (>1000.0)  67,611.3500 (>1000.0)       2;0        3.3922 (0.00)          5           1\r\ntest_deserialize_proto_request[1000-500] (0002_ac3775c)     162,492.4160 (>1000.0)  172,359.1360 (>1000.0)  166,427.1273 (>1000.0)   3,162.6573 (>1000.0)  166,304.3530 (>1000.0)   3,138.3735 (>1000.0)       2;1        6.0086 (0.00)          7           1\r\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\r\n```\r\n\r\nSerialization performance is also improved, although not as significant\r\nas the deserialization perforamance.\r\n```\r\n---------------------------------------------------------------------------------------------------------- benchmark 'serialize-request': 24 tests ----------------------------------------------------------------------------------------------------------\r\nName (time in us)                                                  Min                     Max                    Mean                 StdDev                  Median                     IQR            Outliers           OPS            Rounds  Iterations\r\n-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\r\ntest_serialize_proto_request[1-100] (0001_7467c7b)             73.3760 (21.72)        375.7880 (3.40)          78.3862 (21.26)        13.7893 (6.41)          75.6350 (21.40)          1.6200 (18.41)     527;662   12,757.3548 (0.05)      12398           1\r\ntest_serialize_proto_request[1-100] (0002_ac3775c)            126.0540 (37.32)     39,474.1100 (357.10)       215.1010 (58.35)       715.0832 (332.39)       138.9175 (39.31)        104.4490 (>1000.0)    66;193    4,648.9797 (0.02)       6382           1\r\ntest_serialize_proto_request[1-1] (0001_7467c7b)                3.3780 (1.0)          127.6300 (1.15)           3.6866 (1.0)           2.1514 (1.0)            3.5340 (1.0)            0.0880 (1.0)      385;1818  271,249.9283 (1.0)       50267           1\r\ntest_serialize_proto_request[1-1] (0002_ac3775c)                5.8470 (1.73)       1,560.9360 (14.12)         10.7064 (2.90)         13.6365 (6.34)          10.3590 (2.93)           4.9460 (56.20)    962;1241   93,402.3626 (0.34)      26766           1\r\ntest_serialize_proto_request[100-100] (0001_7467c7b)        7,148.5460 (>1000.0)    9,444.1250 (85.44)      7,525.8909 (>1000.0)     305.5168 (142.01)     7,450.3040 (>1000.0)      228.3147 (>1000.0)     21;10      132.8746 (0.00)        133           1\r\ntest_serialize_proto_request[100-100] (0002_ac3775c)        5,871.7720 (>1000.0)    7,544.0470 (68.25)      6,234.8434 (>1000.0)     264.2215 (122.82)     6,181.4380 (>1000.0)      216.3943 (>1000.0)     17;11      160.3890 (0.00)        155           1\r\ntest_serialize_proto_request[100-500] (0001_7467c7b)       36,230.4730 (>1000.0)   39,488.9470 (357.24)    37,301.1935 (>1000.0)     745.8722 (346.70)    37,284.1360 (>1000.0)      672.7235 (>1000.0)       4;2       26.8088 (0.00)         27           1\r\ntest_serialize_proto_request[100-500] (0002_ac3775c)       30,596.9580 (>1000.0)   33,150.7000 (299.90)    31,431.9774 (>1000.0)     571.1242 (265.47)    31,389.9560 (>1000.0)      741.8257 (>1000.0)       9;1       31.8147 (0.00)         33           1\r\ntest_serialize_proto_request[1000-100] (0001_7467c7b)      72,902.3020 (>1000.0)   78,092.1620 (706.46)    74,928.3109 (>1000.0)   1,500.6398 (697.53)    75,107.4010 (>1000.0)    2,256.1870 (>1000.0)       4;0       13.3461 (0.00)         13           1\r\ntest_serialize_proto_request[1000-100] (0002_ac3775c)      63,619.4170 (>1000.0)   75,790.0490 (685.63)    65,387.8999 (>1000.0)   3,043.8494 (>1000.0)   64,336.3970 (>1000.0)    1,927.8670 (>1000.0)       1;1       15.2933 (0.00)         16           1\r\ntest_serialize_proto_request[1000-500] (0001_7467c7b)     372,581.2870 (>1000.0)  402,702.5400 (>1000.0)  380,281.0462 (>1000.0)  12,622.1482 (>1000.0)  375,547.3720 (>1000.0)    9,360.2127 (>1000.0)       1;1        2.6296 (0.00)          5           1\r\ntest_serialize_proto_request[1000-500] (0002_ac3775c)     372,103.9150 (>1000.0)  535,268.8430 (>1000.0)  444,222.4522 (>1000.0)  67,463.8563 (>1000.0)  421,689.7070 (>1000.0)  109,535.8960 (>1000.0)       2;0        2.2511 (0.00)          5           1\r\n-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\r\n\r\n```\r\n\r\n\r\n### Move `transformer_inputs` as top level field in the request\r\n\r\nThis PR extracts `transformer_inputs` from within `prediction_rows` to\r\ntop level request field to improve flexibility of passing data from\r\nclient without having to denormalize it beforehand. A new proto message\r\n`TransformerInput` is introduced to store all tables and variables that\r\nneed to be passed to standard transformer.\r\n\r\n```\r\nmessage TransformerInput {\r\n   // List of tables\r\n   // All tables must have unique name.\r\n   // Each table doesn't need to have same number of row.\r\n   repeated Table tables = 1;  \r\n   // List of variables\r\n   repeated NamedValue variables = 2;\r\n}\r\n```\r\n\r\n\r\n### Add utility package\r\n\r\n2 utility functions are added to the package to facilitate a more\r\nuser-friendly api to use `Table`:\r\n- `df_to_table` --> to convert pandas DataFrame to Table\r\n- `table_to_df` --> to convert Table into pandas DataFrame\r\n\r\nExample usage is as follow:\r\n```\r\nfrom caraml.upi.utils import df_to_table, table_to_df\r\n\r\ndf = pd.DataFrame(...)\r\ntable = df_to_table(df, \"my-table)\r\nnew_df = table_to_df(table)\r\n```\r\n\r\n\r\n### Note\r\n\r\nThe PR contains generated docs and code, thus it's better to start the\r\nreview with following source files:\r\n- table.proto\r\n- upi.proto\r\n- values.proto\r\n- utils.py  \r\n\r\n<img width=\"352\" alt=\"Screenshot 2022-09-06 at 11 26 23 AM\"\r\nsrc=\"https://user-images.githubusercontent.com/4023015/188540757-c466ab95-31a1-4fa9-af37-5b03dbb22a8e.png\">",
          "timestamp": "2022-09-12T11:51:20+08:00",
          "tree_id": "10a21c96d1d113c62d6af5f3cfb3f0386471f407",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/8fbb12ddbc0e7f88d822d36ef685ef6c56475ca3"
        },
        "date": 1662954800688,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 138212.4723166723,
            "unit": "iter/sec",
            "range": "stddev: 0.000003038381351126648",
            "extra": "mean: 7.235237046543823 usec\nrounds: 19570"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 5719.588536029043,
            "unit": "iter/sec",
            "range": "stddev: 0.00005383926817252484",
            "extra": "mean: 174.83775164957464 usec\nrounds: 5456"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 126.60000118881594,
            "unit": "iter/sec",
            "range": "stddev: 0.00020067448761732428",
            "extra": "mean: 7.898894080645093 msec\nrounds: 124"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 26.296058599794208,
            "unit": "iter/sec",
            "range": "stddev: 0.0038797625164533733",
            "extra": "mean: 38.028512760000694 msec\nrounds: 25"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 13.402760423729115,
            "unit": "iter/sec",
            "range": "stddev: 0.002857523434619866",
            "extra": "mean: 74.61149557142984 msec\nrounds: 14"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 2.6811352464361593,
            "unit": "iter/sec",
            "range": "stddev: 0.010811735312883422",
            "extra": "mean: 372.9763358000042 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 109717.04619965993,
            "unit": "iter/sec",
            "range": "stddev: 0.000005577130709973363",
            "extra": "mean: 9.114354010043513 usec\nrounds: 24214"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 6152.325575007755,
            "unit": "iter/sec",
            "range": "stddev: 0.00004121065001916704",
            "extra": "mean: 162.54016270891833 usec\nrounds: 4843"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 131.08209448739137,
            "unit": "iter/sec",
            "range": "stddev: 0.0002560846697137159",
            "extra": "mean: 7.628806999999445 msec\nrounds: 120"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 25.669499292623218,
            "unit": "iter/sec",
            "range": "stddev: 0.001196246492269889",
            "extra": "mean: 38.956739615383746 msec\nrounds: 26"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 12.867979675719385,
            "unit": "iter/sec",
            "range": "stddev: 0.0016100488741706133",
            "extra": "mean: 77.71227692307455 msec\nrounds: 13"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 2.7041055297993917,
            "unit": "iter/sec",
            "range": "stddev: 0.0040778461061368385",
            "extra": "mean: 369.8080525999984 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 138151.68106438938,
            "unit": "iter/sec",
            "range": "stddev: 0.000004528722686060115",
            "extra": "mean: 7.238420787177556 usec\nrounds: 50762"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 41365.44376804125,
            "unit": "iter/sec",
            "range": "stddev: 0.000016594257715737687",
            "extra": "mean: 24.174767847470676 usec\nrounds: 31251"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 4688.461183928277,
            "unit": "iter/sec",
            "range": "stddev: 0.00015896035243233685",
            "extra": "mean: 213.28959775286856 usec\nrounds: 1335"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 1142.5722987241377,
            "unit": "iter/sec",
            "range": "stddev: 0.00012873078105165697",
            "extra": "mean: 875.2181381577847 usec\nrounds: 912"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 552.4993347341674,
            "unit": "iter/sec",
            "range": "stddev: 0.00015519862362541119",
            "extra": "mean: 1.8099569305022705 msec\nrounds: 518"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 114.52693852179837,
            "unit": "iter/sec",
            "range": "stddev: 0.0006236882759071738",
            "extra": "mean: 8.731570169490439 msec\nrounds: 118"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 109993.29389423906,
            "unit": "iter/sec",
            "range": "stddev: 0.000004709799202616968",
            "extra": "mean: 9.091463348315777 usec\nrounds: 29412"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 43505.65474444675,
            "unit": "iter/sec",
            "range": "stddev: 0.000009809598719699399",
            "extra": "mean: 22.985517764852037 usec\nrounds: 24571"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 5918.158113909371,
            "unit": "iter/sec",
            "range": "stddev: 0.00003389451382744761",
            "extra": "mean: 168.9714909187223 usec\nrounds: 3744"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 1222.2576678196256,
            "unit": "iter/sec",
            "range": "stddev: 0.00026866206798280387",
            "extra": "mean: 818.1580908253912 usec\nrounds: 1079"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 616.2218854249899,
            "unit": "iter/sec",
            "range": "stddev: 0.00010894262888208497",
            "extra": "mean: 1.6227920878050763 msec\nrounds: 615"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 122.1984501430643,
            "unit": "iter/sec",
            "range": "stddev: 0.0003685590422906384",
            "extra": "mean: 8.183409845454229 msec\nrounds: 110"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 243999.5485830873,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029307287347474846",
            "extra": "mean: 4.098368238003021 usec\nrounds: 59524"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 15355.991731017057,
            "unit": "iter/sec",
            "range": "stddev: 0.000047647985347467844",
            "extra": "mean: 65.12116035984398 usec\nrounds: 9672"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 446.5286570242289,
            "unit": "iter/sec",
            "range": "stddev: 0.000303456013697051",
            "extra": "mean: 2.2394979230767253 msec\nrounds: 442"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 90.69020060699064,
            "unit": "iter/sec",
            "range": "stddev: 0.00044686745635441714",
            "extra": "mean: 11.026549652630466 msec\nrounds: 95"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 42.143831338993046,
            "unit": "iter/sec",
            "range": "stddev: 0.0014132094754998115",
            "extra": "mean: 23.728265044444658 msec\nrounds: 45"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 8.673091644965933,
            "unit": "iter/sec",
            "range": "stddev: 0.006653124073056414",
            "extra": "mean: 115.29913910000289 msec\nrounds: 10"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 147694.04818886216,
            "unit": "iter/sec",
            "range": "stddev: 0.00000278760522728152",
            "extra": "mean: 6.7707535426292935 usec\nrounds: 34014"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 10461.967838483331,
            "unit": "iter/sec",
            "range": "stddev: 0.000013520749725489186",
            "extra": "mean: 95.58431219044635 usec\nrounds: 7268"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 216.67082727403508,
            "unit": "iter/sec",
            "range": "stddev: 0.002739055611434178",
            "extra": "mean: 4.615295988763854 msec\nrounds: 178"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 44.98597376700885,
            "unit": "iter/sec",
            "range": "stddev: 0.0011177537984977995",
            "extra": "mean: 22.229150916665613 msec\nrounds: 36"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 15.934477698589498,
            "unit": "iter/sec",
            "range": "stddev: 0.009197490636499484",
            "extra": "mean: 62.756998937500086 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 3.0852620427855704,
            "unit": "iter/sec",
            "range": "stddev: 0.01912585190815099",
            "extra": "mean: 324.1215773999983 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 232497.7634879757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022399908833093227",
            "extra": "mean: 4.301116643006839 usec\nrounds: 59172"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 96174.40659482619,
            "unit": "iter/sec",
            "range": "stddev: 0.000003674202721267128",
            "extra": "mean: 10.397776658117653 usec\nrounds: 53192"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 13337.785364446536,
            "unit": "iter/sec",
            "range": "stddev: 0.000055841137197023066",
            "extra": "mean: 74.97496568400477 usec\nrounds: 11161"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 3630.609774160114,
            "unit": "iter/sec",
            "range": "stddev: 0.000034256354234571836",
            "extra": "mean: 275.43582544101275 usec\nrounds: 3231"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 1149.2183922564832,
            "unit": "iter/sec",
            "range": "stddev: 0.00007269629905370267",
            "extra": "mean: 870.1566270937469 usec\nrounds: 1373"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 341.48363579204124,
            "unit": "iter/sec",
            "range": "stddev: 0.00015683834305088435",
            "extra": "mean: 2.928398011461334 msec\nrounds: 349"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 157390.81563610522,
            "unit": "iter/sec",
            "range": "stddev: 0.000004087921286179158",
            "extra": "mean: 6.353610888655954 usec\nrounds: 38462"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 72847.62430014605,
            "unit": "iter/sec",
            "range": "stddev: 0.000010726344340917373",
            "extra": "mean: 13.727283622590216 usec\nrounds: 38315"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 9295.69169406179,
            "unit": "iter/sec",
            "range": "stddev: 0.00003337520487095647",
            "extra": "mean: 107.57671757108868 usec\nrounds: 1087"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 1964.8520174522944,
            "unit": "iter/sec",
            "range": "stddev: 0.0006960259783719289",
            "extra": "mean: 508.9441805885412 usec\nrounds: 1700"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 651.2495617057903,
            "unit": "iter/sec",
            "range": "stddev: 0.00348122370181926",
            "extra": "mean: 1.5355096706410711 msec\nrounds: 671"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 150.37609850498671,
            "unit": "iter/sec",
            "range": "stddev: 0.006927751963498839",
            "extra": "mean: 6.649992983870628 msec\nrounds: 186"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1-1]",
            "value": 2168.3619759969947,
            "unit": "iter/sec",
            "range": "stddev: 0.00006959965600155193",
            "extra": "mean: 461.177612903034 usec\nrounds: 1550"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-10]",
            "value": 219.90094009816954,
            "unit": "iter/sec",
            "range": "stddev: 0.00026415388126977617",
            "extra": "mean: 4.5475021596250285 msec\nrounds: 213"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-100]",
            "value": 29.292016496813417,
            "unit": "iter/sec",
            "range": "stddev: 0.0019570008334109847",
            "extra": "mean: 34.138994838705855 msec\nrounds: 31"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-10]",
            "value": 54.59661220923969,
            "unit": "iter/sec",
            "range": "stddev: 0.0010707710316915863",
            "extra": "mean: 18.316154785713326 msec\nrounds: 56"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-100]",
            "value": 7.040971673805478,
            "unit": "iter/sec",
            "range": "stddev: 0.005430143174827305",
            "extra": "mean: 142.0258518750046 msec\nrounds: 8"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-10]",
            "value": 28.22500670148296,
            "unit": "iter/sec",
            "range": "stddev: 0.0013855718673742897",
            "extra": "mean: 35.42957529032081 msec\nrounds: 31"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-100]",
            "value": 3.5561838513707507,
            "unit": "iter/sec",
            "range": "stddev: 0.01075959770168823",
            "extra": "mean: 281.2003096000069 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1-1]",
            "value": 2557.3403993260004,
            "unit": "iter/sec",
            "range": "stddev: 0.00003167893175750889",
            "extra": "mean: 391.03124490723053 usec\nrounds: 2209"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-10]",
            "value": 566.4649863241955,
            "unit": "iter/sec",
            "range": "stddev: 0.0002520837427767047",
            "extra": "mean: 1.7653341762374817 msec\nrounds: 505"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-100]",
            "value": 87.40280175854093,
            "unit": "iter/sec",
            "range": "stddev: 0.000728883638747403",
            "extra": "mean: 11.441280827159305 msec\nrounds: 81"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-10]",
            "value": 174.31916409766916,
            "unit": "iter/sec",
            "range": "stddev: 0.0003364377255102482",
            "extra": "mean: 5.736603919461837 msec\nrounds: 149"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-100]",
            "value": 22.183867325041906,
            "unit": "iter/sec",
            "range": "stddev: 0.0024688624814020893",
            "extra": "mean: 45.0778029523809 msec\nrounds: 21"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-10]",
            "value": 88.74236641464823,
            "unit": "iter/sec",
            "range": "stddev: 0.003093370668049199",
            "extra": "mean: 11.268574869048516 msec\nrounds: 84"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-100]",
            "value": 11.544909248167116,
            "unit": "iter/sec",
            "range": "stddev: 0.003090231253186621",
            "extra": "mean: 86.6182642499993 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pradithya.pura@go-jek.com",
            "name": "aria",
            "username": "pradithya"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ccbe0077c09855bf0edea8badf04c8d0d76c064",
          "message": "Rename NamedValue to Variable (#10)\n\nMinor refactoring in the UPI, no structural changes.\r\n\r\n## Changes:\r\n1. Rename `NamedValue` to `Variable` (and rename `value.proto` to\r\n`variable.proto`)\r\n3. Move `Type` to `type.proto`",
          "timestamp": "2022-09-13T12:38:35+08:00",
          "tree_id": "7c0d3c9d6ab4bc242c7bd5162762b574cea6b6c2",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/2ccbe0077c09855bf0edea8badf04c8d0d76c064"
        },
        "date": 1663044022231,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 165193.1317520657,
            "unit": "iter/sec",
            "range": "stddev: 4.052776284687213e-7",
            "extra": "mean: 6.053520442368484 usec\nrounds: 20619"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 6960.650536467384,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018217072788943563",
            "extra": "mean: 143.6647328810609 usec\nrounds: 6046"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 148.83598937488995,
            "unit": "iter/sec",
            "range": "stddev: 0.000021131740774651125",
            "extra": "mean: 6.7188050699296085 msec\nrounds: 143"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 29.994629533979968,
            "unit": "iter/sec",
            "range": "stddev: 0.0001197401737362169",
            "extra": "mean: 33.33930158621001 msec\nrounds: 29"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 14.779632454969393,
            "unit": "iter/sec",
            "range": "stddev: 0.00009978676851711325",
            "extra": "mean: 67.66068121428604 msec\nrounds: 14"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 3.0387361160390087,
            "unit": "iter/sec",
            "range": "stddev: 0.00018976962857362317",
            "extra": "mean: 329.0841855999986 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 137313.78260813578,
            "unit": "iter/sec",
            "range": "stddev: 6.285372994207871e-7",
            "extra": "mean: 7.2825901450387285 usec\nrounds: 24272"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 7797.478607501072,
            "unit": "iter/sec",
            "range": "stddev: 0.000015029965329260461",
            "extra": "mean: 128.246584612366 usec\nrounds: 5342"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 152.42264722800238,
            "unit": "iter/sec",
            "range": "stddev: 0.000051575896982461675",
            "extra": "mean: 6.560704843973374 msec\nrounds: 141"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 30.673829709087936,
            "unit": "iter/sec",
            "range": "stddev: 0.00013757458734690964",
            "extra": "mean: 32.60108077419898 msec\nrounds: 31"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 15.188040865239111,
            "unit": "iter/sec",
            "range": "stddev: 0.00027524468350568376",
            "extra": "mean: 65.84127662499917 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 3.10176396882659,
            "unit": "iter/sec",
            "range": "stddev: 0.0012370097964799916",
            "extra": "mean: 322.39719400000126 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 160871.87914657814,
            "unit": "iter/sec",
            "range": "stddev: 3.4250012310187554e-7",
            "extra": "mean: 6.216126804168501 usec\nrounds: 54943"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 52656.15066231054,
            "unit": "iter/sec",
            "range": "stddev: 7.004110336814041e-7",
            "extra": "mean: 18.991133750226172 usec\nrounds: 33899"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 6628.723899058595,
            "unit": "iter/sec",
            "range": "stddev: 0.000001963244830877662",
            "extra": "mean: 150.8585989140412 usec\nrounds: 5525"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 1346.9202850206934,
            "unit": "iter/sec",
            "range": "stddev: 0.000004087795471391963",
            "extra": "mean: 742.4344344065146 usec\nrounds: 1273"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 673.5751574238611,
            "unit": "iter/sec",
            "range": "stddev: 0.000007522426070575074",
            "extra": "mean: 1.4846153231431147 msec\nrounds: 229"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 132.80579552949317,
            "unit": "iter/sec",
            "range": "stddev: 0.000011346411233802752",
            "extra": "mean: 7.529791874014433 msec\nrounds: 127"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 137395.8049469032,
            "unit": "iter/sec",
            "range": "stddev: 4.4985708228830506e-7",
            "extra": "mean: 7.278242595444973 usec\nrounds: 35586"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 52291.91291443545,
            "unit": "iter/sec",
            "range": "stddev: 6.158755763396954e-7",
            "extra": "mean: 19.123415921622268 usec\nrounds: 22372"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 6837.467574791319,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025149077550963705",
            "extra": "mean: 146.25297876173406 usec\nrounds: 4473"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 1491.9619565450566,
            "unit": "iter/sec",
            "range": "stddev: 0.00000588673300196903",
            "extra": "mean: 670.258377308564 usec\nrounds: 1137"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 720.2680274791222,
            "unit": "iter/sec",
            "range": "stddev: 0.000008183804582670368",
            "extra": "mean: 1.3883720529702204 msec\nrounds: 623"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 134.87553700026353,
            "unit": "iter/sec",
            "range": "stddev: 0.00005915401438023897",
            "extra": "mean: 7.414242954955174 msec\nrounds: 111"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 284434.5992037025,
            "unit": "iter/sec",
            "range": "stddev: 3.4470350248285003e-7",
            "extra": "mean: 3.5157466876377916 usec\nrounds: 82645"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 17927.631265724078,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017831226256783569",
            "extra": "mean: 55.77981748832065 usec\nrounds: 13369"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 501.1175094594742,
            "unit": "iter/sec",
            "range": "stddev: 0.000010295057708718667",
            "extra": "mean: 1.9955399305018116 msec\nrounds: 518"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 102.89716570543126,
            "unit": "iter/sec",
            "range": "stddev: 0.000047026201890192044",
            "extra": "mean: 9.718440669811535 msec\nrounds: 106"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 49.42451881924524,
            "unit": "iter/sec",
            "range": "stddev: 0.0002257204669821141",
            "extra": "mean: 20.232872750004667 msec\nrounds: 52"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 10.01883474443314,
            "unit": "iter/sec",
            "range": "stddev: 0.00013366117099658512",
            "extra": "mean: 99.81200663636453 msec\nrounds: 11"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 179176.5534529992,
            "unit": "iter/sec",
            "range": "stddev: 4.97307802480111e-7",
            "extra": "mean: 5.581087372920786 usec\nrounds: 37174"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 12922.40278980324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017714286795101064",
            "extra": "mean: 77.38498917469715 usec\nrounds: 8591"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 255.06734311542792,
            "unit": "iter/sec",
            "range": "stddev: 0.0027649341912299222",
            "extra": "mean: 3.9205332512812547 msec\nrounds: 195"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 51.05506148568831,
            "unit": "iter/sec",
            "range": "stddev: 0.000410170883727288",
            "extra": "mean: 19.586696615384916 msec\nrounds: 39"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 17.595527354581627,
            "unit": "iter/sec",
            "range": "stddev: 0.010334355335800207",
            "extra": "mean: 56.832624555558674 msec\nrounds: 18"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 3.7042931692476744,
            "unit": "iter/sec",
            "range": "stddev: 0.00037617465236651135",
            "extra": "mean: 269.9570348000009 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 294920.83624996815,
            "unit": "iter/sec",
            "range": "stddev: 2.5404285636932966e-7",
            "extra": "mean: 3.3907404194135093 usec\nrounds: 71943"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 117491.2429242751,
            "unit": "iter/sec",
            "range": "stddev: 4.6364611380397803e-7",
            "extra": "mean: 8.511272628586587 usec\nrounds: 61725"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 15468.093009413293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012171305757912906",
            "extra": "mean: 64.64921043540649 usec\nrounds: 12151"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 4215.533356097754,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024961931611888485",
            "extra": "mean: 237.21790708962212 usec\nrounds: 3498"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 1399.7882451807031,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056439453498238526",
            "extra": "mean: 714.3937688024427 usec\nrounds: 1436"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 384.95620924827466,
            "unit": "iter/sec",
            "range": "stddev: 0.000021327499736957793",
            "extra": "mean: 2.5976980653273665 msec\nrounds: 398"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 184233.5689933501,
            "unit": "iter/sec",
            "range": "stddev: 4.2081530793395843e-7",
            "extra": "mean: 5.427892459902869 usec\nrounds: 38023"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 85828.27136876971,
            "unit": "iter/sec",
            "range": "stddev: 5.108347925468866e-7",
            "extra": "mean: 11.651172557156608 usec\nrounds: 33444"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 11652.22127179139,
            "unit": "iter/sec",
            "range": "stddev: 0.000001319679502997874",
            "extra": "mean: 85.82054671591916 usec\nrounds: 1081"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 2319.695726603716,
            "unit": "iter/sec",
            "range": "stddev: 0.0009242963399904524",
            "extra": "mean: 431.09102134878157 usec\nrounds: 2061"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 677.9267669285607,
            "unit": "iter/sec",
            "range": "stddev: 0.0040615558098930195",
            "extra": "mean: 1.475085582666452 msec\nrounds: 750"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 157.49002833030548,
            "unit": "iter/sec",
            "range": "stddev: 0.007756832091816885",
            "extra": "mean: 6.349608356807769 msec\nrounds: 213"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1-1]",
            "value": 3009.2833773209336,
            "unit": "iter/sec",
            "range": "stddev: 0.000026028711570893675",
            "extra": "mean: 332.30502901001876 usec\nrounds: 1758"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-10]",
            "value": 264.92602120216566,
            "unit": "iter/sec",
            "range": "stddev: 0.00004171896926562459",
            "extra": "mean: 3.7746386536975836 msec\nrounds: 257"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-100]",
            "value": 35.063131089603026,
            "unit": "iter/sec",
            "range": "stddev: 0.000221317680089441",
            "extra": "mean: 28.519985777782452 msec\nrounds: 36"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-10]",
            "value": 65.67712793950749,
            "unit": "iter/sec",
            "range": "stddev: 0.00011179742233779942",
            "extra": "mean: 15.226000761194356 msec\nrounds: 67"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-100]",
            "value": 8.21814547784141,
            "unit": "iter/sec",
            "range": "stddev: 0.001664938041970652",
            "extra": "mean: 121.68195399999921 msec\nrounds: 9"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-10]",
            "value": 33.17312725373023,
            "unit": "iter/sec",
            "range": "stddev: 0.0003261584112104752",
            "extra": "mean: 30.144881799998302 msec\nrounds: 35"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-100]",
            "value": 4.19782522026261,
            "unit": "iter/sec",
            "range": "stddev: 0.0016953004626227963",
            "extra": "mean: 238.2185887999981 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1-1]",
            "value": 4148.071357353458,
            "unit": "iter/sec",
            "range": "stddev: 0.000007778186322133858",
            "extra": "mean: 241.07589138438001 usec\nrounds: 2716"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-10]",
            "value": 729.985508169274,
            "unit": "iter/sec",
            "range": "stddev: 0.000015322187624560972",
            "extra": "mean: 1.369890208516459 msec\nrounds: 681"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-100]",
            "value": 104.22894651909198,
            "unit": "iter/sec",
            "range": "stddev: 0.0002152635410822219",
            "extra": "mean: 9.59426371844626 msec\nrounds: 103"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-10]",
            "value": 204.2792330265099,
            "unit": "iter/sec",
            "range": "stddev: 0.0001265501933304671",
            "extra": "mean: 4.895260204301958 msec\nrounds: 186"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-100]",
            "value": 26.216833043881365,
            "unit": "iter/sec",
            "range": "stddev: 0.00046508061927732016",
            "extra": "mean: 38.14343243999815 msec\nrounds: 25"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-10]",
            "value": 106.72410409529121,
            "unit": "iter/sec",
            "range": "stddev: 0.00009327340779237857",
            "extra": "mean: 9.369954505377022 msec\nrounds: 93"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-100]",
            "value": 13.210752683214256,
            "unit": "iter/sec",
            "range": "stddev: 0.00084537761953897",
            "extra": "mean: 75.69591407691799 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pradithya.pura@go-jek.com",
            "name": "aria",
            "username": "pradithya"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8170722e755114b8d383b7ce34adde7ed650a888",
          "message": "Remove generated artifacts related to #10 (#11)\n\nFollow up to #10 to remove generated codes and docs related to\r\nNamedValue.",
          "timestamp": "2022-09-13T14:51:09+08:00",
          "tree_id": "218032a28915b77c16345bfdac0076847cd5ba04",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/8170722e755114b8d383b7ce34adde7ed650a888"
        },
        "date": 1663051982354,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 182989.52314423805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027165088328498934",
            "extra": "mean: 5.464793736916669 usec\nrounds: 22321"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 7769.212039032166,
            "unit": "iter/sec",
            "range": "stddev: 0.00000172163363717599",
            "extra": "mean: 128.71318159113767 usec\nrounds: 6812"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 168.2221083102578,
            "unit": "iter/sec",
            "range": "stddev: 0.00011401727338890432",
            "extra": "mean: 5.944521858896607 msec\nrounds: 163"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 34.01097700572437,
            "unit": "iter/sec",
            "range": "stddev: 0.00033254286674554444",
            "extra": "mean: 29.402272090910248 msec\nrounds: 33"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 16.814889196800795,
            "unit": "iter/sec",
            "range": "stddev: 0.0007652692930249784",
            "extra": "mean: 59.47110256249921 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 3.3646750277446427,
            "unit": "iter/sec",
            "range": "stddev: 0.0028899260698251",
            "extra": "mean: 297.2055225999952 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 157913.7674687262,
            "unit": "iter/sec",
            "range": "stddev: 5.681739094327685e-7",
            "extra": "mean: 6.3325700857466 usec\nrounds: 26596"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 8850.253757638087,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012480665175618125",
            "extra": "mean: 112.99111046809975 usec\nrounds: 6219"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 175.4728207419547,
            "unit": "iter/sec",
            "range": "stddev: 0.000028672891400368052",
            "extra": "mean: 5.698888270968022 msec\nrounds: 155"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 34.69546341692785,
            "unit": "iter/sec",
            "range": "stddev: 0.00019199302270083663",
            "extra": "mean: 28.822211941175624 msec\nrounds: 34"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 17.11998588330244,
            "unit": "iter/sec",
            "range": "stddev: 0.0001463078139507381",
            "extra": "mean: 58.411263117648105 msec\nrounds: 17"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 3.560336579323693,
            "unit": "iter/sec",
            "range": "stddev: 0.000615269622768301",
            "extra": "mean: 280.8723214000054 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 177721.16783591692,
            "unit": "iter/sec",
            "range": "stddev: 2.4769151632245794e-7",
            "extra": "mean: 5.626791744488542 usec\nrounds: 57804"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 58255.484674711464,
            "unit": "iter/sec",
            "range": "stddev: 6.226799143153076e-7",
            "extra": "mean: 17.165765688566953 usec\nrounds: 38611"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 7418.317723057284,
            "unit": "iter/sec",
            "range": "stddev: 0.000001544306083343169",
            "extra": "mean: 134.80145193725588 usec\nrounds: 6169"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 1525.7085414587762,
            "unit": "iter/sec",
            "range": "stddev: 0.000003653831063575936",
            "extra": "mean: 655.4331792911572 usec\nrounds: 1439"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 758.8739050425959,
            "unit": "iter/sec",
            "range": "stddev: 0.000005579280431946934",
            "extra": "mean: 1.3177419770994359 msec\nrounds: 262"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 150.3078495007681,
            "unit": "iter/sec",
            "range": "stddev: 0.000020492230867734313",
            "extra": "mean: 6.653012489510003 msec\nrounds: 143"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 156983.15758746234,
            "unit": "iter/sec",
            "range": "stddev: 2.7647679463599444e-7",
            "extra": "mean: 6.370110114792762 usec\nrounds: 40485"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 60373.06324206098,
            "unit": "iter/sec",
            "range": "stddev: 5.409449886856102e-7",
            "extra": "mean: 16.563678340961097 usec\nrounds: 26954"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 7865.307050168118,
            "unit": "iter/sec",
            "range": "stddev: 0.000001744281488204502",
            "extra": "mean: 127.1406181121213 usec\nrounds: 3920"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 1655.6324400202482,
            "unit": "iter/sec",
            "range": "stddev: 0.000004932667778406745",
            "extra": "mean: 603.9987957639742 usec\nrounds: 1322"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 802.6590257647401,
            "unit": "iter/sec",
            "range": "stddev: 0.000008759212787529715",
            "extra": "mean: 1.2458590359053665 msec\nrounds: 752"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 153.9938668691232,
            "unit": "iter/sec",
            "range": "stddev: 0.00003682802175607862",
            "extra": "mean: 6.4937651111124 msec\nrounds: 144"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 339127.20060953277,
            "unit": "iter/sec",
            "range": "stddev: 2.2340604074697252e-7",
            "extra": "mean: 2.9487460699190233 usec\nrounds: 86957"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 20722.755912524266,
            "unit": "iter/sec",
            "range": "stddev: 9.440068332939886e-7",
            "extra": "mean: 48.25612984205578 usec\nrounds: 15773"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 570.226617968445,
            "unit": "iter/sec",
            "range": "stddev: 0.000012287248071639295",
            "extra": "mean: 1.753688741438825 msec\nrounds: 584"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 117.09025271971409,
            "unit": "iter/sec",
            "range": "stddev: 0.00004102074349524419",
            "extra": "mean: 8.540420545455303 msec\nrounds: 121"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 57.13570768120499,
            "unit": "iter/sec",
            "range": "stddev: 0.00014647371226879545",
            "extra": "mean: 17.50218979660864 msec\nrounds: 59"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 11.264422452026992,
            "unit": "iter/sec",
            "range": "stddev: 0.00021585162985166128",
            "extra": "mean: 88.77507961538264 msec\nrounds: 13"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 206691.91069254116,
            "unit": "iter/sec",
            "range": "stddev: 4.011723645862973e-7",
            "extra": "mean: 4.83811870841681 usec\nrounds: 41842"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 14578.642549099293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011356334649542824",
            "extra": "mean: 68.59349192711927 usec\nrounds: 9662"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 294.66477331902274,
            "unit": "iter/sec",
            "range": "stddev: 0.002234007353271482",
            "extra": "mean: 3.3936869641263048 msec\nrounds: 223"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 57.529861722131976,
            "unit": "iter/sec",
            "range": "stddev: 0.00435526710157779",
            "extra": "mean: 17.382277135133386 msec\nrounds: 37"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 20.576335615944693,
            "unit": "iter/sec",
            "range": "stddev: 0.00896363739754238",
            "extra": "mean: 48.59951833333704 msec\nrounds: 21"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 4.167447524782168,
            "unit": "iter/sec",
            "range": "stddev: 0.00045170463233822826",
            "extra": "mean: 239.9550310000052 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 334625.13444197143,
            "unit": "iter/sec",
            "range": "stddev: 2.0195694939145608e-7",
            "extra": "mean: 2.988418672337997 usec\nrounds: 85463"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 135307.2857292934,
            "unit": "iter/sec",
            "range": "stddev: 3.6429907695419255e-7",
            "extra": "mean: 7.39058502733312 usec\nrounds: 68966"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 17711.728702898774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010142347284475866",
            "extra": "mean: 56.459762724139736 usec\nrounds: 13832"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 4762.462852504516,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018376798343405345",
            "extra": "mean: 209.97539108869125 usec\nrounds: 3838"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 1599.476025731836,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041153012006274",
            "extra": "mean: 625.2047444990321 usec\nrounds: 1636"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 437.97750851468595,
            "unit": "iter/sec",
            "range": "stddev: 0.000021645005800191423",
            "extra": "mean: 2.283222267260486 msec\nrounds: 449"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 206931.62140580124,
            "unit": "iter/sec",
            "range": "stddev: 2.5098191356447567e-7",
            "extra": "mean: 4.832514205448377 usec\nrounds: 44842"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 96695.54016864911,
            "unit": "iter/sec",
            "range": "stddev: 3.1798559578432055e-7",
            "extra": "mean: 10.341738597828554 usec\nrounds: 38611"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 13266.722670465817,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020674996696194564",
            "extra": "mean: 75.37656622808474 usec\nrounds: 989"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 2589.4568218230943,
            "unit": "iter/sec",
            "range": "stddev: 0.0007829532154999011",
            "extra": "mean: 386.18137656219153 usec\nrounds: 2321"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 817.0786319882054,
            "unit": "iter/sec",
            "range": "stddev: 0.0030741147468018814",
            "extra": "mean: 1.2238724167424258 msec\nrounds: 1099"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 181.62455023406267,
            "unit": "iter/sec",
            "range": "stddev: 0.006749288398993751",
            "extra": "mean: 5.505863599999465 msec\nrounds: 255"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1-1]",
            "value": 3412.31114190456,
            "unit": "iter/sec",
            "range": "stddev: 0.000022622539766754287",
            "extra": "mean: 293.05651167608835 usec\nrounds: 1927"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-10]",
            "value": 298.4732715957434,
            "unit": "iter/sec",
            "range": "stddev: 0.000036732922724214236",
            "extra": "mean: 3.350383753471952 msec\nrounds: 288"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-100]",
            "value": 40.29202646603177,
            "unit": "iter/sec",
            "range": "stddev: 0.00012075848828442637",
            "extra": "mean: 24.818806292680534 msec\nrounds: 41"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-10]",
            "value": 74.75762220304951,
            "unit": "iter/sec",
            "range": "stddev: 0.00009161552269943068",
            "extra": "mean: 13.37656242307835 msec\nrounds: 78"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-100]",
            "value": 9.342944445199263,
            "unit": "iter/sec",
            "range": "stddev: 0.00035395875072952496",
            "extra": "mean: 107.03263899999271 msec\nrounds: 8"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-10]",
            "value": 38.32477532157448,
            "unit": "iter/sec",
            "range": "stddev: 0.00019763978301296178",
            "extra": "mean: 26.09278180000345 msec\nrounds: 40"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-100]",
            "value": 4.7817935696367755,
            "unit": "iter/sec",
            "range": "stddev: 0.0006963944322281986",
            "extra": "mean: 209.12655166667093 msec\nrounds: 6"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1-1]",
            "value": 4618.351185349487,
            "unit": "iter/sec",
            "range": "stddev: 0.00001222382097073949",
            "extra": "mean: 216.52749214313513 usec\nrounds: 2800"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-10]",
            "value": 796.0369008274109,
            "unit": "iter/sec",
            "range": "stddev: 0.000049254774496089955",
            "extra": "mean: 1.2562231712632759 msec\nrounds: 689"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-100]",
            "value": 115.19501986965113,
            "unit": "iter/sec",
            "range": "stddev: 0.0002849289307383593",
            "extra": "mean: 8.680930834783911 msec\nrounds: 115"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-10]",
            "value": 226.3321270854463,
            "unit": "iter/sec",
            "range": "stddev: 0.00009794305839475617",
            "extra": "mean: 4.4182856975601785 msec\nrounds: 205"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-100]",
            "value": 29.676645871536877,
            "unit": "iter/sec",
            "range": "stddev: 0.0005949532664264055",
            "extra": "mean: 33.696530407403905 msec\nrounds: 27"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-10]",
            "value": 115.89960929607439,
            "unit": "iter/sec",
            "range": "stddev: 0.0003380944145516318",
            "extra": "mean: 8.628156782180547 msec\nrounds: 101"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-100]",
            "value": 14.884054633704196,
            "unit": "iter/sec",
            "range": "stddev: 0.0006673798347616286",
            "extra": "mean: 67.18599364285792 msec\nrounds: 14"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "leenj.leon@gmail.com",
            "name": "leonlnj",
            "username": "leonlnj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82f86cfcc67c319780b6cc8c6606652708d4f96f",
          "message": "Merge pull request #12 from leonlnj/echo_server_ci\n\nAdd upi echo server example and ci",
          "timestamp": "2022-10-06T14:01:10+08:00",
          "tree_id": "aca0395d0028c097ab1384bc61a9a4559264f861",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/82f86cfcc67c319780b6cc8c6606652708d4f96f"
        },
        "date": 1665036189946,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 1164581.8154268437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018426062388079332",
            "extra": "mean: 858.677326705019 nsec\nrounds: 59881"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 141048.46524328846,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035206309876758286",
            "extra": "mean: 7.08976165231676 usec\nrounds: 86957"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 3709.788749759802,
            "unit": "iter/sec",
            "range": "stddev: 0.000011624515681495994",
            "extra": "mean: 269.5571277649562 usec\nrounds: 3436"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 712.7941718731583,
            "unit": "iter/sec",
            "range": "stddev: 0.00009234124555877034",
            "extra": "mean: 1.402929540476027 msec\nrounds: 420"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 344.6663597280309,
            "unit": "iter/sec",
            "range": "stddev: 0.00013244272670168651",
            "extra": "mean: 2.9013565489509316 msec\nrounds: 286"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 59.873656345497345,
            "unit": "iter/sec",
            "range": "stddev: 0.0004723596757356348",
            "extra": "mean: 16.701836183672498 msec\nrounds: 49"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 121143.31100252016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016332744059388044",
            "extra": "mean: 8.254686055090543 usec\nrounds: 24568"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 6706.38842948706,
            "unit": "iter/sec",
            "range": "stddev: 0.000008999929533915356",
            "extra": "mean: 149.11155393313314 usec\nrounds: 5136"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 129.67676867742355,
            "unit": "iter/sec",
            "range": "stddev: 0.000280927660202924",
            "extra": "mean: 7.711481479674607 msec\nrounds: 123"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 26.263577277273296,
            "unit": "iter/sec",
            "range": "stddev: 0.0007485968355828111",
            "extra": "mean: 38.075544296295526 msec\nrounds: 27"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 13.221118410878079,
            "unit": "iter/sec",
            "range": "stddev: 0.0018176893487710085",
            "extra": "mean: 75.63656635714112 msec\nrounds: 14"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 2.751659893428342,
            "unit": "iter/sec",
            "range": "stddev: 0.006268337789914224",
            "extra": "mean: 363.4170059999974 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 1679853.2251563375,
            "unit": "iter/sec",
            "range": "stddev: 1.1220505306612018e-7",
            "extra": "mean: 595.2901033405382 nsec\nrounds: 90091"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 816978.9098132352,
            "unit": "iter/sec",
            "range": "stddev: 2.678480364688916e-7",
            "extra": "mean: 1.2240218051996472 usec\nrounds: 181819"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 143562.60756173846,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014686264952450831",
            "extra": "mean: 6.965602095029894 usec\nrounds: 88496"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 31919.845833593674,
            "unit": "iter/sec",
            "range": "stddev: 0.000005470995915409976",
            "extra": "mean: 31.328472111464947 usec\nrounds: 17301"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 17686.545849594244,
            "unit": "iter/sec",
            "range": "stddev: 0.000006469780977271785",
            "extra": "mean: 56.54015252633071 usec\nrounds: 12706"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 3140.321040488073,
            "unit": "iter/sec",
            "range": "stddev: 0.000027586286836012438",
            "extra": "mean: 318.43877970023686 usec\nrounds: 2601"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 125843.95581396566,
            "unit": "iter/sec",
            "range": "stddev: 0.000002039094873168838",
            "extra": "mean: 7.946349060087509 usec\nrounds: 37876"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 47246.34683705922,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038867334825750275",
            "extra": "mean: 21.16565759991452 usec\nrounds: 21691"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 6336.08850895734,
            "unit": "iter/sec",
            "range": "stddev: 0.000018166723043687594",
            "extra": "mean: 157.82607812158844 usec\nrounds: 4493"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 1357.0323047113388,
            "unit": "iter/sec",
            "range": "stddev: 0.00007687838923284687",
            "extra": "mean: 736.9021330798126 usec\nrounds: 1052"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 585.6489165172203,
            "unit": "iter/sec",
            "range": "stddev: 0.0001662962357496325",
            "extra": "mean: 1.7075076411766847 msec\nrounds: 510"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 121.43668864790274,
            "unit": "iter/sec",
            "range": "stddev: 0.00045494255935454235",
            "extra": "mean: 8.23474364406815 msec\nrounds: 118"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 1090479.9112592207,
            "unit": "iter/sec",
            "range": "stddev: 2.2395987238761725e-7",
            "extra": "mean: 917.027438722198 nsec\nrounds: 163935"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 111928.89339643788,
            "unit": "iter/sec",
            "range": "stddev: 0.000002051955492624512",
            "extra": "mean: 8.934243604626085 usec\nrounds: 75758"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 3657.4434791026442,
            "unit": "iter/sec",
            "range": "stddev: 0.00002694041721721309",
            "extra": "mean: 273.41502492482823 usec\nrounds: 3330"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 776.6018449035952,
            "unit": "iter/sec",
            "range": "stddev: 0.00010536284184491299",
            "extra": "mean: 1.2876611181938884 msec\nrounds: 753"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 367.09773723316175,
            "unit": "iter/sec",
            "range": "stddev: 0.0001380130856967999",
            "extra": "mean: 2.724070182336349 msec\nrounds: 351"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 67.50471005309858,
            "unit": "iter/sec",
            "range": "stddev: 0.00044386369912088723",
            "extra": "mean: 14.81378113043385 msec\nrounds: 69"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 159494.59982743056,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010963977364396707",
            "extra": "mean: 6.26980475252439 usec\nrounds: 25839"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 11211.198201207022,
            "unit": "iter/sec",
            "range": "stddev: 0.000007273947399304808",
            "extra": "mean: 89.19653207917936 usec\nrounds: 7123"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 228.88279626522058,
            "unit": "iter/sec",
            "range": "stddev: 0.0024604253754053782",
            "extra": "mean: 4.36904833529401 msec\nrounds: 170"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 43.31007005928392,
            "unit": "iter/sec",
            "range": "stddev: 0.006129658838733677",
            "extra": "mean: 23.089318457143445 msec\nrounds: 35"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 15.919975584090489,
            "unit": "iter/sec",
            "range": "stddev: 0.013485253276901992",
            "extra": "mean: 62.81416668750062 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 3.3352061761155447,
            "unit": "iter/sec",
            "range": "stddev: 0.028553373908960056",
            "extra": "mean: 299.8315388000037 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 1044551.3215968261,
            "unit": "iter/sec",
            "range": "stddev: 1.7379221199373267e-7",
            "extra": "mean: 957.3488437802264 nsec\nrounds: 163908"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 492173.7577420832,
            "unit": "iter/sec",
            "range": "stddev: 8.087382137280728e-7",
            "extra": "mean: 2.0318027612598475 usec\nrounds: 172385"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 122524.96727755849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015170253904994818",
            "extra": "mean: 8.161601853234353 usec\nrounds: 93458"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 28780.215248552646,
            "unit": "iter/sec",
            "range": "stddev: 0.000004674779829413812",
            "extra": "mean: 34.74609176351765 usec\nrounds: 27026"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 15486.115689967533,
            "unit": "iter/sec",
            "range": "stddev: 0.00000779958533669528",
            "extra": "mean: 64.57397193847882 usec\nrounds: 12722"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 2958.249133493364,
            "unit": "iter/sec",
            "range": "stddev: 0.00002687797518674439",
            "extra": "mean: 338.03779021786136 usec\nrounds: 2617"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 161121.52917456542,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010374586320597528",
            "extra": "mean: 6.2064952158973155 usec\nrounds: 37311"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 76454.05064665119,
            "unit": "iter/sec",
            "range": "stddev: 0.00000212840667837972",
            "extra": "mean: 13.079751714159851 usec\nrounds: 39523"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 11338.353274688843,
            "unit": "iter/sec",
            "range": "stddev: 0.00001291131031264829",
            "extra": "mean: 88.19622883266025 usec\nrounds: 874"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 2086.274759275195,
            "unit": "iter/sec",
            "range": "stddev: 0.0008783519807051432",
            "extra": "mean: 479.32325095445043 usec\nrounds: 1833"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 603.5887106582738,
            "unit": "iter/sec",
            "range": "stddev: 0.00473618294698706",
            "extra": "mean: 1.6567572957244345 msec\nrounds: 842"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 135.83853526182565,
            "unit": "iter/sec",
            "range": "stddev: 0.00970781600453223",
            "extra": "mean: 7.361681264248933 msec\nrounds: 193"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1-1]",
            "value": 3084.3637298732533,
            "unit": "iter/sec",
            "range": "stddev: 0.00004357795600084637",
            "extra": "mean: 324.2159769662099 usec\nrounds: 1780"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-10]",
            "value": 350.1743447565921,
            "unit": "iter/sec",
            "range": "stddev: 0.0002300981802568971",
            "extra": "mean: 2.8557203432338967 msec\nrounds: 303"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-100]",
            "value": 46.938863958177045,
            "unit": "iter/sec",
            "range": "stddev: 0.0009099714940799595",
            "extra": "mean: 21.30430768181797 msec\nrounds: 44"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-10]",
            "value": 93.45441255179448,
            "unit": "iter/sec",
            "range": "stddev: 0.0005355615305482325",
            "extra": "mean: 10.700404322222646 msec\nrounds: 90"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-100]",
            "value": 11.526155505541885,
            "unit": "iter/sec",
            "range": "stddev: 0.01112342979801769",
            "extra": "mean: 86.75919733333377 msec\nrounds: 12"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-10]",
            "value": 48.151004303323184,
            "unit": "iter/sec",
            "range": "stddev: 0.0009483165171808518",
            "extra": "mean: 20.767998808510505 msec\nrounds: 47"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-100]",
            "value": 5.963227347948052,
            "unit": "iter/sec",
            "range": "stddev: 0.005944452961230855",
            "extra": "mean: 167.69442814285793 msec\nrounds: 7"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1-1]",
            "value": 4050.6977962774977,
            "unit": "iter/sec",
            "range": "stddev: 0.000029821224060770515",
            "extra": "mean: 246.8710455070181 usec\nrounds: 2593"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-10]",
            "value": 728.5442238899003,
            "unit": "iter/sec",
            "range": "stddev: 0.00010041680343875754",
            "extra": "mean: 1.3726002721711548 msec\nrounds: 654"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-100]",
            "value": 108.51127544789594,
            "unit": "iter/sec",
            "range": "stddev: 0.0004660817679994976",
            "extra": "mean: 9.215632162393776 msec\nrounds: 117"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-10]",
            "value": 220.94062463224478,
            "unit": "iter/sec",
            "range": "stddev: 0.0002972088893309683",
            "extra": "mean: 4.526102891509871 msec\nrounds: 212"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-100]",
            "value": 28.345144424320925,
            "unit": "iter/sec",
            "range": "stddev: 0.0017910677069330686",
            "extra": "mean: 35.279411000000835 msec\nrounds: 29"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-10]",
            "value": 111.13653039305393,
            "unit": "iter/sec",
            "range": "stddev: 0.0003886272057574712",
            "extra": "mean: 8.997941509090879 msec\nrounds: 110"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-100]",
            "value": 13.680052762759932,
            "unit": "iter/sec",
            "range": "stddev: 0.011371943133352172",
            "extra": "mean: 73.09913326666523 msec\nrounds: 15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pradithya.pura@go-jek.com",
            "name": "aria",
            "username": "pradithya"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8882f9ba9453b91d4baec4eabceb5b484a298501",
          "message": "Fix handling of np.int32 and np.float32 in df_to_table function (#13)\n\nDue to incorrect handling of np.int32 and np.float32, the resulting type\r\nwill fallback to string type in `df_to_table`",
          "timestamp": "2022-10-07T15:31:29+08:00",
          "tree_id": "381fb16055f51eb738db730b4085edb2df792246",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/8882f9ba9453b91d4baec4eabceb5b484a298501"
        },
        "date": 1665128004099,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 1030232.2202042417,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010442789539474986",
            "extra": "mean: 970.6549459322403 nsec\nrounds: 64103"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 124194.7621332556,
            "unit": "iter/sec",
            "range": "stddev: 0.000010522669269845356",
            "extra": "mean: 8.051869360859545 usec\nrounds: 70423"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 3180.684406864107,
            "unit": "iter/sec",
            "range": "stddev: 0.00019587463174241488",
            "extra": "mean: 314.39774340451385 usec\nrounds: 3184"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 611.5081167802563,
            "unit": "iter/sec",
            "range": "stddev: 0.0004143965945880859",
            "extra": "mean: 1.6353012700227938 msec\nrounds: 437"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 287.86759248796557,
            "unit": "iter/sec",
            "range": "stddev: 0.0005348919918903869",
            "extra": "mean: 3.473819304761808 msec\nrounds: 210"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 48.24076713508582,
            "unit": "iter/sec",
            "range": "stddev: 0.001044665335431871",
            "extra": "mean: 20.729355260868015 msec\nrounds: 46"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 104213.15650636803,
            "unit": "iter/sec",
            "range": "stddev: 0.000021520444135071186",
            "extra": "mean: 9.595717407704603 usec\nrounds: 21232"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 5859.739206173415,
            "unit": "iter/sec",
            "range": "stddev: 0.0000608245717787353",
            "extra": "mean: 170.6560590523328 usec\nrounds: 4369"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 117.58689355079494,
            "unit": "iter/sec",
            "range": "stddev: 0.001147953463655343",
            "extra": "mean: 8.504349165139072 msec\nrounds: 109"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 22.395056449027788,
            "unit": "iter/sec",
            "range": "stddev: 0.0027878122298963474",
            "extra": "mean: 44.6527117391308 msec\nrounds: 23"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 11.438751034574024,
            "unit": "iter/sec",
            "range": "stddev: 0.003631155200940974",
            "extra": "mean: 87.42213175000184 msec\nrounds: 12"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 2.3166031530839053,
            "unit": "iter/sec",
            "range": "stddev: 0.005084079376686501",
            "extra": "mean: 431.6665107999967 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 936496.1542909495,
            "unit": "iter/sec",
            "range": "stddev: 0.000025211091856650788",
            "extra": "mean: 1.0678100442997882 usec\nrounds: 192308"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 595515.5092923155,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031109334048172654",
            "extra": "mean: 1.679217391312539 usec\nrounds: 153847"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 113520.77856667801,
            "unit": "iter/sec",
            "range": "stddev: 0.000018045704290916393",
            "extra": "mean: 8.808960021469868 usec\nrounds: 72464"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 26748.547248586336,
            "unit": "iter/sec",
            "range": "stddev: 0.00003997976090996095",
            "extra": "mean: 37.385207903313336 usec\nrounds: 23256"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 12533.196910097564,
            "unit": "iter/sec",
            "range": "stddev: 0.00015753624313829604",
            "extra": "mean: 79.78810252269591 usec\nrounds: 12407"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 2515.345998646719,
            "unit": "iter/sec",
            "range": "stddev: 0.00023140954755787376",
            "extra": "mean: 397.55962024230854 usec\nrounds: 2312"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 97289.25984146299,
            "unit": "iter/sec",
            "range": "stddev: 0.000008665761428115686",
            "extra": "mean: 10.278626866208487 usec\nrounds: 29070"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 37984.17006081246,
            "unit": "iter/sec",
            "range": "stddev: 0.00001722957685566051",
            "extra": "mean: 26.32675660410653 usec\nrounds: 11508"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 4899.346066182559,
            "unit": "iter/sec",
            "range": "stddev: 0.0001270427896930126",
            "extra": "mean: 204.10887218244076 usec\nrounds: 3904"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 1070.8021161527076,
            "unit": "iter/sec",
            "range": "stddev: 0.0003822016329179481",
            "extra": "mean: 933.879364744727 usec\nrounds: 902"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 449.77264653435503,
            "unit": "iter/sec",
            "range": "stddev: 0.001155677489619647",
            "extra": "mean: 2.2233455229110226 msec\nrounds: 371"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 99.51556934981986,
            "unit": "iter/sec",
            "range": "stddev: 0.0011984484212338336",
            "extra": "mean: 10.048678880435006 msec\nrounds: 92"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 712342.8341959871,
            "unit": "iter/sec",
            "range": "stddev: 0.000005580146643751196",
            "extra": "mean: 1.4038184312314845 usec\nrounds: 172414"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 102212.75752506481,
            "unit": "iter/sec",
            "range": "stddev: 0.000012326591750749626",
            "extra": "mean: 9.783514545674771 usec\nrounds: 74627"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 3242.093511638202,
            "unit": "iter/sec",
            "range": "stddev: 0.00007577352369797124",
            "extra": "mean: 308.4426764404795 usec\nrounds: 1944"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 668.0847303394091,
            "unit": "iter/sec",
            "range": "stddev: 0.0005099025472330896",
            "extra": "mean: 1.4968161291337505 msec\nrounds: 635"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 326.1995129052748,
            "unit": "iter/sec",
            "range": "stddev: 0.0008814340381476996",
            "extra": "mean: 3.0656085016607317 msec\nrounds: 301"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 54.9081501649761,
            "unit": "iter/sec",
            "range": "stddev: 0.0014809500447834426",
            "extra": "mean: 18.21223255555718 msec\nrounds: 63"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 132385.49460134993,
            "unit": "iter/sec",
            "range": "stddev: 0.00005074274086109148",
            "extra": "mean: 7.553697654046481 usec\nrounds: 21740"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 10064.686873922297,
            "unit": "iter/sec",
            "range": "stddev: 0.00006445553737021895",
            "extra": "mean: 99.3572887588793 usec\nrounds: 7179"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 197.50007021358286,
            "unit": "iter/sec",
            "range": "stddev: 0.00381645942439645",
            "extra": "mean: 5.063289339181339 msec\nrounds: 171"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 40.101593428534805,
            "unit": "iter/sec",
            "range": "stddev: 0.0021337694175838843",
            "extra": "mean: 24.93666496774258 msec\nrounds: 31"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 13.189712234275328,
            "unit": "iter/sec",
            "range": "stddev: 0.01835404713542982",
            "extra": "mean: 75.81666546153744 msec\nrounds: 13"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 2.9101957150504494,
            "unit": "iter/sec",
            "range": "stddev: 0.02431602242015027",
            "extra": "mean: 343.6195011999956 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 757620.7619470888,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039152416149081826",
            "extra": "mean: 1.319921589041456 usec\nrounds: 178572"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 410017.7704139186,
            "unit": "iter/sec",
            "range": "stddev: 0.000022641908728823058",
            "extra": "mean: 2.4389186814768693 usec\nrounds: 142858"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 103025.16291442326,
            "unit": "iter/sec",
            "range": "stddev: 0.00004729345172616464",
            "extra": "mean: 9.706366597358738 usec\nrounds: 20202"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 25332.306252498467,
            "unit": "iter/sec",
            "range": "stddev: 0.00007705218521623195",
            "extra": "mean: 39.47528464374902 usec\nrounds: 18149"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 12937.684052571212,
            "unit": "iter/sec",
            "range": "stddev: 0.00009567785203848007",
            "extra": "mean: 77.29358638969559 usec\nrounds: 9243"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 2679.157264339143,
            "unit": "iter/sec",
            "range": "stddev: 0.00025091132268656815",
            "extra": "mean: 373.25169870036206 usec\nrounds: 2539"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 137156.03716632546,
            "unit": "iter/sec",
            "range": "stddev: 0.000013872878650239455",
            "extra": "mean: 7.290965973209964 usec\nrounds: 37735"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 67628.08034204948,
            "unit": "iter/sec",
            "range": "stddev: 0.000011417083142637124",
            "extra": "mean: 14.786757142036228 usec\nrounds: 37594"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 8879.253458843734,
            "unit": "iter/sec",
            "range": "stddev: 0.00013328343458530903",
            "extra": "mean: 112.62208074531314 usec\nrounds: 1127"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 1795.6198822332099,
            "unit": "iter/sec",
            "range": "stddev: 0.0002193601180790086",
            "extra": "mean: 556.9107414628877 usec\nrounds: 205"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 859.0450971520348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000677444582899106",
            "extra": "mean: 1.1640832400013323 msec\nrounds: 25"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 142.4782294075124,
            "unit": "iter/sec",
            "range": "stddev: 0.008446292868472404",
            "extra": "mean: 7.018616136363029 msec\nrounds: 22"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1-1]",
            "value": 2132.540269679678,
            "unit": "iter/sec",
            "range": "stddev: 0.00021532855444847133",
            "extra": "mean: 468.9243219544017 usec\nrounds: 1494"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-10]",
            "value": 270.7305307554679,
            "unit": "iter/sec",
            "range": "stddev: 0.0006159222409007494",
            "extra": "mean: 3.693709746032414 msec\nrounds: 252"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-100]",
            "value": 34.00752754232496,
            "unit": "iter/sec",
            "range": "stddev: 0.0065692871537970906",
            "extra": "mean: 29.405254432431875 msec\nrounds: 37"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-10]",
            "value": 73.29827721713374,
            "unit": "iter/sec",
            "range": "stddev: 0.00094407630062951",
            "extra": "mean: 13.642885453332951 msec\nrounds: 75"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-100]",
            "value": 8.963385843423,
            "unit": "iter/sec",
            "range": "stddev: 0.00672089869977707",
            "extra": "mean: 111.56498420000105 msec\nrounds: 10"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-10]",
            "value": 36.03693270274216,
            "unit": "iter/sec",
            "range": "stddev: 0.0029802775270268964",
            "extra": "mean: 27.749309527775285 msec\nrounds: 36"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-100]",
            "value": 4.78808577322825,
            "unit": "iter/sec",
            "range": "stddev: 0.0027456869610842692",
            "extra": "mean: 208.85173060000852 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1-1]",
            "value": 2517.956910444916,
            "unit": "iter/sec",
            "range": "stddev: 0.000138633075072507",
            "extra": "mean: 397.14738399685433 usec\nrounds: 2362"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-10]",
            "value": 584.5749619366536,
            "unit": "iter/sec",
            "range": "stddev: 0.0003015581870930978",
            "extra": "mean: 1.7106445966947919 msec\nrounds: 605"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-100]",
            "value": 82.92785781362606,
            "unit": "iter/sec",
            "range": "stddev: 0.0018389525908422428",
            "extra": "mean: 12.05867396511583 msec\nrounds: 86"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-10]",
            "value": 177.79954480521127,
            "unit": "iter/sec",
            "range": "stddev: 0.0005118999861486283",
            "extra": "mean: 5.624311361964129 msec\nrounds: 163"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-100]",
            "value": 22.168384875208016,
            "unit": "iter/sec",
            "range": "stddev: 0.0018978974398267776",
            "extra": "mean: 45.10928539130285 msec\nrounds: 23"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-10]",
            "value": 91.18871472941424,
            "unit": "iter/sec",
            "range": "stddev: 0.004126544732341799",
            "extra": "mean: 10.966269268815953 msec\nrounds: 93"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-100]",
            "value": 11.31303604594088,
            "unit": "iter/sec",
            "range": "stddev: 0.006394956144928984",
            "extra": "mean: 88.39360149999702 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pradithya.pura@go-jek.com",
            "name": "aria",
            "username": "pradithya"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1faf05ea56505f66139acf5ba4816acea21ec367",
          "message": "Ability to customize model name in response metadata (#14)\n\nAdd `--model-name` flag in example server to allow customizing response\r\nmetadata.",
          "timestamp": "2022-10-12T16:15:33+08:00",
          "tree_id": "5d91ca2ebd4a409177753d715bc59d6e070efa20",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/1faf05ea56505f66139acf5ba4816acea21ec367"
        },
        "date": 1665562656968,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 1040832.7146027602,
            "unit": "iter/sec",
            "range": "stddev: 0.000003715232541810203",
            "extra": "mean: 960.7691860278006 nsec\nrounds: 58480"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 130832.48433430238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066606918041462605",
            "extra": "mean: 7.643361700942756 usec\nrounds: 74075"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 3153.9777053870366,
            "unit": "iter/sec",
            "range": "stddev: 0.00022888382106016374",
            "extra": "mean: 317.05994569713874 usec\nrounds: 3370"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 629.1131992132038,
            "unit": "iter/sec",
            "range": "stddev: 0.0004509737485614698",
            "extra": "mean: 1.589539054737118 msec\nrounds: 475"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 254.8295309853112,
            "unit": "iter/sec",
            "range": "stddev: 0.0006362975800031686",
            "extra": "mean: 3.9241919730945223 msec\nrounds: 223"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 50.31532279068837,
            "unit": "iter/sec",
            "range": "stddev: 0.000838480481210652",
            "extra": "mean: 19.874661326530642 msec\nrounds: 49"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 101659.90433217464,
            "unit": "iter/sec",
            "range": "stddev: 0.00001334417511176468",
            "extra": "mean: 9.836719860885282 usec\nrounds: 20704"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 6016.049353333215,
            "unit": "iter/sec",
            "range": "stddev: 0.00005150061311955728",
            "extra": "mean: 166.22204062304547 usec\nrounds: 4751"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 115.9910085207247,
            "unit": "iter/sec",
            "range": "stddev: 0.0008857091422413288",
            "extra": "mean: 8.621357920354015 msec\nrounds: 113"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 22.21847645640625,
            "unit": "iter/sec",
            "range": "stddev: 0.0017221108249486665",
            "extra": "mean: 45.007586454546036 msec\nrounds: 22"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 11.129126064480499,
            "unit": "iter/sec",
            "range": "stddev: 0.004522953350279383",
            "extra": "mean: 89.85431508333619 msec\nrounds: 12"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 2.31246633823688,
            "unit": "iter/sec",
            "range": "stddev: 0.01778419238521999",
            "extra": "mean: 432.43872719999956 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 1318670.4267039588,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020276068312654163",
            "extra": "mean: 758.3395970287307 nsec\nrounds: 188680"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 617882.1093591688,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048113783527947325",
            "extra": "mean: 1.618431711895885 usec\nrounds: 185186"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 121342.54235853169,
            "unit": "iter/sec",
            "range": "stddev: 0.000011211265878875745",
            "extra": "mean: 8.241132751655167 usec\nrounds: 78741"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 28019.447205389577,
            "unit": "iter/sec",
            "range": "stddev: 0.00002033530787282062",
            "extra": "mean: 35.689497821629004 usec\nrounds: 23641"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 13442.930099590041,
            "unit": "iter/sec",
            "range": "stddev: 0.00006977680515299334",
            "extra": "mean: 74.38854420811846 usec\nrounds: 12837"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 2643.7832118148876,
            "unit": "iter/sec",
            "range": "stddev: 0.00012313944205621992",
            "extra": "mean: 378.2458393453245 usec\nrounds: 2689"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 94142.40528935597,
            "unit": "iter/sec",
            "range": "stddev: 0.00002588002608965171",
            "extra": "mean: 10.622205762922684 usec\nrounds: 25126"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 39863.07984196669,
            "unit": "iter/sec",
            "range": "stddev: 0.000014224271359319241",
            "extra": "mean: 25.08586902879564 usec\nrounds: 17668"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 4985.825462855523,
            "unit": "iter/sec",
            "range": "stddev: 0.00010505134829307339",
            "extra": "mean: 200.56859339541975 usec\nrounds: 3876"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 1128.6881723706115,
            "unit": "iter/sec",
            "range": "stddev: 0.0002939326334826279",
            "extra": "mean: 885.9842997199796 usec\nrounds: 1071"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 484.0625587164344,
            "unit": "iter/sec",
            "range": "stddev: 0.0006327470304852247",
            "extra": "mean: 2.065848684210678 msec\nrounds: 399"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 101.04879586972955,
            "unit": "iter/sec",
            "range": "stddev: 0.00041966035423736376",
            "extra": "mean: 9.896208969072562 msec\nrounds: 97"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 727940.3791325558,
            "unit": "iter/sec",
            "range": "stddev: 0.00000491131886080523",
            "extra": "mean: 1.3737388784389757 usec\nrounds: 178572"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 101293.53854291436,
            "unit": "iter/sec",
            "range": "stddev: 0.000014431378486839978",
            "extra": "mean: 9.872298020039418 usec\nrounds: 69445"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 3225.214209703826,
            "unit": "iter/sec",
            "range": "stddev: 0.00009182966712700567",
            "extra": "mean: 310.0569248985886 usec\nrounds: 2956"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 663.116821165754,
            "unit": "iter/sec",
            "range": "stddev: 0.00031039992246443046",
            "extra": "mean: 1.508029909785742 msec\nrounds: 654"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 330.47352628538664,
            "unit": "iter/sec",
            "range": "stddev: 0.0001719356978344712",
            "extra": "mean: 3.0259609937300427 msec\nrounds: 319"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 57.247329504457745,
            "unit": "iter/sec",
            "range": "stddev: 0.001915654298425023",
            "extra": "mean: 17.468063727271886 msec\nrounds: 55"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 142861.4335444254,
            "unit": "iter/sec",
            "range": "stddev: 0.000006007470208818487",
            "extra": "mean: 6.999789762637595 usec\nrounds: 34247"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 9912.228681091974,
            "unit": "iter/sec",
            "range": "stddev: 0.00010271796136038531",
            "extra": "mean: 100.88548520955185 usec\nrounds: 6964"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 195.57217932067525,
            "unit": "iter/sec",
            "range": "stddev: 0.003757487444562638",
            "extra": "mean: 5.113201701149542 msec\nrounds: 87"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 36.66848671332789,
            "unit": "iter/sec",
            "range": "stddev: 0.006918798272883119",
            "extra": "mean: 27.271373586206117 msec\nrounds: 29"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 14.385540855812296,
            "unit": "iter/sec",
            "range": "stddev: 0.011872514933604554",
            "extra": "mean: 69.5142441999991 msec\nrounds: 15"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 2.8397789508567817,
            "unit": "iter/sec",
            "range": "stddev: 0.027395983879393866",
            "extra": "mean: 352.14008459999775 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 802585.3036218097,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028764276789313567",
            "extra": "mean: 1.245973475326948 usec\nrounds: 185186"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 406325.8657111249,
            "unit": "iter/sec",
            "range": "stddev: 0.000008313863898218287",
            "extra": "mean: 2.4610788640045484 usec\nrounds: 125000"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 109518.6341660203,
            "unit": "iter/sec",
            "range": "stddev: 0.000007302052915011151",
            "extra": "mean: 9.130866245867262 usec\nrounds: 66226"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 25627.432849275425,
            "unit": "iter/sec",
            "range": "stddev: 0.000027711974487061872",
            "extra": "mean: 39.02068560208025 usec\nrounds: 21142"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 13226.936862534652,
            "unit": "iter/sec",
            "range": "stddev: 0.000045465377301395895",
            "extra": "mean: 75.6032942768861 usec\nrounds: 12563"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 2669.6829195298596,
            "unit": "iter/sec",
            "range": "stddev: 0.0001285394533107591",
            "extra": "mean: 374.5763186648785 usec\nrounds: 2636"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 139319.07032728294,
            "unit": "iter/sec",
            "range": "stddev: 0.000010134232394418784",
            "extra": "mean: 7.177768252765675 usec\nrounds: 33899"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 63655.20789323936,
            "unit": "iter/sec",
            "range": "stddev: 0.00004553116654127924",
            "extra": "mean: 15.709633714136487 usec\nrounds: 29851"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 8927.348523482518,
            "unit": "iter/sec",
            "range": "stddev: 0.000023776987068318134",
            "extra": "mean: 112.0153422227885 usec\nrounds: 225"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 1787.4177963440036,
            "unit": "iter/sec",
            "range": "stddev: 0.0012720756371220837",
            "extra": "mean: 559.4662882093972 usec\nrounds: 1603"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 524.3521849340834,
            "unit": "iter/sec",
            "range": "stddev: 0.005625938903317678",
            "extra": "mean: 1.9071151579652716 msec\nrounds: 747"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 112.30450808388761,
            "unit": "iter/sec",
            "range": "stddev: 0.01207956377185441",
            "extra": "mean: 8.904362051548583 msec\nrounds: 97"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1-1]",
            "value": 2037.126415039895,
            "unit": "iter/sec",
            "range": "stddev: 0.00013597838161895178",
            "extra": "mean: 490.8875524940931 usec\nrounds: 1343"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-10]",
            "value": 265.81817759812066,
            "unit": "iter/sec",
            "range": "stddev: 0.0003573021957909131",
            "extra": "mean: 3.7619699639648347 msec\nrounds: 222"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-100]",
            "value": 33.8149702929359,
            "unit": "iter/sec",
            "range": "stddev: 0.002670313507728237",
            "extra": "mean: 29.572700828570728 msec\nrounds: 35"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-10]",
            "value": 69.37752617261899,
            "unit": "iter/sec",
            "range": "stddev: 0.0007035404161327623",
            "extra": "mean: 14.413889557144039 msec\nrounds: 70"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-100]",
            "value": 9.20933412022919,
            "unit": "iter/sec",
            "range": "stddev: 0.009055732834873143",
            "extra": "mean: 108.58548369999994 msec\nrounds: 10"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-10]",
            "value": 37.0011003494326,
            "unit": "iter/sec",
            "range": "stddev: 0.001970196816394969",
            "extra": "mean: 27.026223289474007 msec\nrounds: 38"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-100]",
            "value": 4.901481544358421,
            "unit": "iter/sec",
            "range": "stddev: 0.002609379279478756",
            "extra": "mean: 204.01994599999966 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1-1]",
            "value": 2517.9415807320324,
            "unit": "iter/sec",
            "range": "stddev: 0.00015759092945667508",
            "extra": "mean: 397.14980190655314 usec\nrounds: 2307"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-10]",
            "value": 555.2118299973473,
            "unit": "iter/sec",
            "range": "stddev: 0.0006191595484928747",
            "extra": "mean: 1.8011143602699855 msec\nrounds: 594"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-100]",
            "value": 87.98425706487384,
            "unit": "iter/sec",
            "range": "stddev: 0.0004467588898827842",
            "extra": "mean: 11.365669647726472 msec\nrounds: 88"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-10]",
            "value": 179.04631409229341,
            "unit": "iter/sec",
            "range": "stddev: 0.0010698749724678475",
            "extra": "mean: 5.585147089286226 msec\nrounds: 168"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-100]",
            "value": 22.35705978830574,
            "unit": "iter/sec",
            "range": "stddev: 0.0021808153009511065",
            "extra": "mean: 44.728600695654436 msec\nrounds: 23"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-10]",
            "value": 93.51906019436285,
            "unit": "iter/sec",
            "range": "stddev: 0.004071822600298551",
            "extra": "mean: 10.693007371135645 msec\nrounds: 97"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-100]",
            "value": 11.480318021761702,
            "unit": "iter/sec",
            "range": "stddev: 0.004148509724826179",
            "extra": "mean: 87.10560091666746 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pradithya.pura@go-jek.com",
            "name": "aria",
            "username": "pradithya"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50e7d79e4b73424e0089e09dfa698fa4685bbc34",
          "message": "Rename experiment_id and treatment_id (#15)\n\nRename `experiment_id` to `experiment_name` and `treatment_id` to\r\n`treatment_name` to better emphasize that the fields are human readable\r\ninstead of numerical value.",
          "timestamp": "2022-10-26T12:54:01+08:00",
          "tree_id": "b7043ed6a5aaa8f933a3678fa46f16c740410337",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/50e7d79e4b73424e0089e09dfa698fa4685bbc34"
        },
        "date": 1666760146714,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 1247772.343946712,
            "unit": "iter/sec",
            "range": "stddev: 1.1863581249781897e-7",
            "extra": "mean: 801.4282451853303 nsec\nrounds: 75758"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 161252.15169901086,
            "unit": "iter/sec",
            "range": "stddev: 2.5291213420510783e-7",
            "extra": "mean: 6.201467636019979 usec\nrounds: 103093"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 4291.241385504807,
            "unit": "iter/sec",
            "range": "stddev: 0.000002676390047194461",
            "extra": "mean: 233.03280103931127 usec\nrounds: 4041"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 815.6245922599153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069041269905191",
            "extra": "mean: 1.2260542527650145 msec\nrounds: 633"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 397.5192223665013,
            "unit": "iter/sec",
            "range": "stddev: 0.000011012379047275427",
            "extra": "mean: 2.5156016205878684 msec\nrounds: 340"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 70.424925349092,
            "unit": "iter/sec",
            "range": "stddev: 0.0002524156900315138",
            "extra": "mean: 14.199518068965807 msec\nrounds: 58"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 137929.51282663507,
            "unit": "iter/sec",
            "range": "stddev: 3.28486447337966e-7",
            "extra": "mean: 7.250079982932367 usec\nrounds: 23530"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 7712.296456167897,
            "unit": "iter/sec",
            "range": "stddev: 0.00001398285086454687",
            "extra": "mean: 129.66306542848875 usec\nrounds: 5869"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 152.41013434621192,
            "unit": "iter/sec",
            "range": "stddev: 0.00011042981454057696",
            "extra": "mean: 6.561243478261225 msec\nrounds: 138"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 30.727305683511414,
            "unit": "iter/sec",
            "range": "stddev: 0.00016776836055140245",
            "extra": "mean: 32.5443437931042 msec\nrounds: 29"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 15.194586293701818,
            "unit": "iter/sec",
            "range": "stddev: 0.00015677307486183182",
            "extra": "mean: 65.81291393333306 msec\nrounds: 15"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 3.096501654735458,
            "unit": "iter/sec",
            "range": "stddev: 0.0002885570505642145",
            "extra": "mean: 322.94508820000374 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 1585302.0866151706,
            "unit": "iter/sec",
            "range": "stddev: 2.143148241688721e-8",
            "extra": "mean: 630.7946027721462 nsec\nrounds: 81968"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 846318.7030016554,
            "unit": "iter/sec",
            "range": "stddev: 5.990011944814954e-8",
            "extra": "mean: 1.1815879720642681 usec\nrounds: 163935"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 153360.69767386254,
            "unit": "iter/sec",
            "range": "stddev: 2.943630506602619e-7",
            "extra": "mean: 6.5205754483890255 usec\nrounds: 105264"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 35592.23941880947,
            "unit": "iter/sec",
            "range": "stddev: 6.431507110267271e-7",
            "extra": "mean: 28.09601239846484 usec\nrounds: 29762"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 19003.870043686144,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010669017233566823",
            "extra": "mean: 52.62086078789202 usec\nrounds: 14266"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 3419.854625036286,
            "unit": "iter/sec",
            "range": "stddev: 0.000004216269656510321",
            "extra": "mean: 292.4100903819529 usec\nrounds: 2932"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 136322.10182081116,
            "unit": "iter/sec",
            "range": "stddev: 3.605080155520971e-7",
            "extra": "mean: 7.3355676492902955 usec\nrounds: 36364"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 52124.944116835795,
            "unit": "iter/sec",
            "range": "stddev: 4.503538341336048e-7",
            "extra": "mean: 19.18467284604744 usec\nrounds: 24814"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 6833.265278441219,
            "unit": "iter/sec",
            "range": "stddev: 0.000004258847702004091",
            "extra": "mean: 146.34292088073542 usec\nrounds: 5359"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 1467.4164247789263,
            "unit": "iter/sec",
            "range": "stddev: 0.000006506660870319612",
            "extra": "mean: 681.4698153257042 usec\nrounds: 1305"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 636.0435338183239,
            "unit": "iter/sec",
            "range": "stddev: 0.000013107989428939011",
            "extra": "mean: 1.5722194265489295 msec\nrounds: 565"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 134.8968522902853,
            "unit": "iter/sec",
            "range": "stddev: 0.000028445502271970583",
            "extra": "mean: 7.413071417323322 msec\nrounds: 127"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 1063345.9642537383,
            "unit": "iter/sec",
            "range": "stddev: 4.493385567569463e-8",
            "extra": "mean: 940.4277005008897 nsec\nrounds: 178572"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 121681.0831386383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010557884741849416",
            "extra": "mean: 8.218204294423005 usec\nrounds: 89278"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 4020.331146054732,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023047346501604258",
            "extra": "mean: 248.73572938918954 usec\nrounds: 3651"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 849.8972379020245,
            "unit": "iter/sec",
            "range": "stddev: 0.000006074926780493382",
            "extra": "mean: 1.1766128367101238 msec\nrounds: 839"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 408.2577982822751,
            "unit": "iter/sec",
            "range": "stddev: 0.000011752571287367158",
            "extra": "mean: 2.4494326972012574 msec\nrounds: 393"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 80.51157600393283,
            "unit": "iter/sec",
            "range": "stddev: 0.00010999093573442776",
            "extra": "mean: 12.420574153847788 msec\nrounds: 78"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 183928.53362653303,
            "unit": "iter/sec",
            "range": "stddev: 4.30682323200737e-7",
            "extra": "mean: 5.436894321304711 usec\nrounds: 37879"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 12978.833670565009,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010514548882576503",
            "extra": "mean: 77.0485257290817 usec\nrounds: 8881"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 254.4768465960916,
            "unit": "iter/sec",
            "range": "stddev: 0.0028859004017778205",
            "extra": "mean: 3.929630586735503 msec\nrounds: 196"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 54.546650375865305,
            "unit": "iter/sec",
            "range": "stddev: 0.0003381847016057266",
            "extra": "mean: 18.332931410256858 msec\nrounds: 39"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 19.081239982049112,
            "unit": "iter/sec",
            "range": "stddev: 0.011074641402556554",
            "extra": "mean: 52.40749557894357 msec\nrounds: 19"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 3.6778586120755468,
            "unit": "iter/sec",
            "range": "stddev: 0.018222444985146677",
            "extra": "mean: 271.8973471999959 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 1113606.4812702825,
            "unit": "iter/sec",
            "range": "stddev: 4.815484544690301e-8",
            "extra": "mean: 897.9832793888668 nsec\nrounds: 178572"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 490588.25576070836,
            "unit": "iter/sec",
            "range": "stddev: 1.9082967596884585e-7",
            "extra": "mean: 2.0383692195187093 usec\nrounds: 163935"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 125287.43504204397,
            "unit": "iter/sec",
            "range": "stddev: 2.9070033300665987e-7",
            "extra": "mean: 7.981646361140843 usec\nrounds: 89286"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 30606.655941848516,
            "unit": "iter/sec",
            "range": "stddev: 6.156260759597308e-7",
            "extra": "mean: 32.672631792900276 usec\nrounds: 23867"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 15739.525953181132,
            "unit": "iter/sec",
            "range": "stddev: 9.478781923249003e-7",
            "extra": "mean: 63.53431500888938 usec\nrounds: 14225"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 3265.990255156524,
            "unit": "iter/sec",
            "range": "stddev: 0.000002713026478192366",
            "extra": "mean: 306.185849275314 usec\nrounds: 3105"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 182848.85536865683,
            "unit": "iter/sec",
            "range": "stddev: 2.648470819876364e-7",
            "extra": "mean: 5.468997867029665 usec\nrounds: 42195"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 84858.8202962272,
            "unit": "iter/sec",
            "range": "stddev: 3.7800578176484415e-7",
            "extra": "mean: 11.784278835236877 usec\nrounds: 37879"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 11527.384802741255,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027399137426765285",
            "extra": "mean: 86.74994520545512 usec\nrounds: 949"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 2269.9732199869313,
            "unit": "iter/sec",
            "range": "stddev: 0.0009978186226720714",
            "extra": "mean: 440.5338314985747 usec\nrounds: 2089"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 722.6185081772535,
            "unit": "iter/sec",
            "range": "stddev: 0.0033608652303774027",
            "extra": "mean: 1.3838560577730272 msec\nrounds: 952"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 163.2528307126929,
            "unit": "iter/sec",
            "range": "stddev: 0.006939368095375451",
            "extra": "mean: 6.125468058559366 msec\nrounds: 222"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1-1]",
            "value": 3234.133392415746,
            "unit": "iter/sec",
            "range": "stddev: 0.000023632913738063223",
            "extra": "mean: 309.201841317079 usec\nrounds: 2004"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-10]",
            "value": 367.6009115397528,
            "unit": "iter/sec",
            "range": "stddev: 0.00003011387863422298",
            "extra": "mean: 2.7203414589244255 msec\nrounds: 353"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-100]",
            "value": 49.52356340950759,
            "unit": "iter/sec",
            "range": "stddev: 0.00007587454242103632",
            "extra": "mean: 20.192408040815955 msec\nrounds: 49"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-10]",
            "value": 99.54975725384584,
            "unit": "iter/sec",
            "range": "stddev: 0.0000515382663088296",
            "extra": "mean: 10.045227909999426 msec\nrounds: 100"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-100]",
            "value": 13.001545493713502,
            "unit": "iter/sec",
            "range": "stddev: 0.00030849141874930583",
            "extra": "mean: 76.91393307691914 msec\nrounds: 13"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-10]",
            "value": 50.5163947427704,
            "unit": "iter/sec",
            "range": "stddev: 0.004589889221852448",
            "extra": "mean: 19.795553603775613 msec\nrounds: 53"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-100]",
            "value": 6.650943930229614,
            "unit": "iter/sec",
            "range": "stddev: 0.0020919368176043466",
            "extra": "mean: 150.354597857131 msec\nrounds: 7"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1-1]",
            "value": 4325.540902059602,
            "unit": "iter/sec",
            "range": "stddev: 0.000005332421743885618",
            "extra": "mean: 231.18495990266814 usec\nrounds: 2868"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-10]",
            "value": 798.9570174772682,
            "unit": "iter/sec",
            "range": "stddev: 0.00004444349816781581",
            "extra": "mean: 1.251631787599202 msec\nrounds: 758"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-100]",
            "value": 114.38309809461515,
            "unit": "iter/sec",
            "range": "stddev: 0.0002569926587837626",
            "extra": "mean: 8.74255039999723 msec\nrounds: 115"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-10]",
            "value": 233.15281253094707,
            "unit": "iter/sec",
            "range": "stddev: 0.00011859672224973093",
            "extra": "mean: 4.289032541124792 msec\nrounds: 231"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-100]",
            "value": 31.235819730939923,
            "unit": "iter/sec",
            "range": "stddev: 0.0001231279433684773",
            "extra": "mean: 32.0145271874992 msec\nrounds: 32"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-10]",
            "value": 123.43669344012864,
            "unit": "iter/sec",
            "range": "stddev: 0.00019406880622469528",
            "extra": "mean: 8.101318758064732 msec\nrounds: 124"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-100]",
            "value": 15.459873812492779,
            "unit": "iter/sec",
            "range": "stddev: 0.008786295746511071",
            "extra": "mean: 64.68358099998994 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "terencelimxp@gmail.com",
            "name": "Terence Lim",
            "username": "terryyylim"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0f5747ed4b5a3e16b0a0792416bcbaebbd6a47e",
          "message": "Merge pull request #16 from terryyylim/add-observation-service-proto\n\nObservation Service Interface",
          "timestamp": "2022-11-21T11:44:37+08:00",
          "tree_id": "8945a055b62c5290e379f5202dd76627f31fdc42",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/f0f5747ed4b5a3e16b0a0792416bcbaebbd6a47e"
        },
        "date": 1669002384149,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 1167556.4153042128,
            "unit": "iter/sec",
            "range": "stddev: 9.418145604337298e-8",
            "extra": "mean: 856.4896624198196 nsec\nrounds: 96154"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 158012.99737781717,
            "unit": "iter/sec",
            "range": "stddev: 2.7918302447592145e-7",
            "extra": "mean: 6.328593322035078 usec\nrounds: 94340"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 4333.913997864793,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034710782259164844",
            "extra": "mean: 230.7383119491236 usec\nrounds: 4084"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 822.0459897274137,
            "unit": "iter/sec",
            "range": "stddev: 0.000013593103077534713",
            "extra": "mean: 1.216476952015294 msec\nrounds: 521"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 404.65000700400367,
            "unit": "iter/sec",
            "range": "stddev: 0.000039395166502850764",
            "extra": "mean: 2.471271426396159 msec\nrounds: 394"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 76.39596450970569,
            "unit": "iter/sec",
            "range": "stddev: 0.0001569759356895909",
            "extra": "mean: 13.089696640624982 msec\nrounds: 64"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 136034.03420474136,
            "unit": "iter/sec",
            "range": "stddev: 8.321074045640116e-7",
            "extra": "mean: 7.351101552240415 usec\nrounds: 25189"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 7613.771565304939,
            "unit": "iter/sec",
            "range": "stddev: 0.000012647766998378932",
            "extra": "mean: 131.34095125166118 usec\nrounds: 6072"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 146.98414182148568,
            "unit": "iter/sec",
            "range": "stddev: 0.000015251748468628213",
            "extra": "mean: 6.803455036765219 msec\nrounds: 136"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 29.580113320822132,
            "unit": "iter/sec",
            "range": "stddev: 0.00014302457909200466",
            "extra": "mean: 33.80649658620735 msec\nrounds: 29"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 14.619777311162249,
            "unit": "iter/sec",
            "range": "stddev: 0.00012060493352700768",
            "extra": "mean: 68.40049466666613 msec\nrounds: 15"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 3.020496269736017,
            "unit": "iter/sec",
            "range": "stddev: 0.00015552210952343685",
            "extra": "mean: 331.0714236000024 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 1426002.6915511438,
            "unit": "iter/sec",
            "range": "stddev: 2.253554840900928e-8",
            "extra": "mean: 701.2609484712561 nsec\nrounds: 65790"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 787520.0279192041,
            "unit": "iter/sec",
            "range": "stddev: 6.714814921572864e-8",
            "extra": "mean: 1.2698089757059428 usec\nrounds: 192308"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 146963.89921116745,
            "unit": "iter/sec",
            "range": "stddev: 3.5695522082661216e-7",
            "extra": "mean: 6.8043921355348225 usec\nrounds: 101011"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 35343.56300571713,
            "unit": "iter/sec",
            "range": "stddev: 8.238279911626267e-7",
            "extra": "mean: 28.293695229262575 usec\nrounds: 30121"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 18690.112666829355,
            "unit": "iter/sec",
            "range": "stddev: 8.537727522695318e-7",
            "extra": "mean: 53.50422535305363 usec\nrounds: 14728"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 3539.376149561003,
            "unit": "iter/sec",
            "range": "stddev: 0.000003239378205486135",
            "extra": "mean: 282.5356666665769 usec\nrounds: 3180"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 136984.08677662697,
            "unit": "iter/sec",
            "range": "stddev: 3.009266464323606e-7",
            "extra": "mean: 7.300118017581483 usec\nrounds: 35715"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 51927.76486154488,
            "unit": "iter/sec",
            "range": "stddev: 0.000001478302958886527",
            "extra": "mean: 19.257520570475204 usec\nrounds: 24331"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 6639.015110420456,
            "unit": "iter/sec",
            "range": "stddev: 0.000002075017197696757",
            "extra": "mean: 150.62475131746896 usec\nrounds: 5123"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 1440.2880161074067,
            "unit": "iter/sec",
            "range": "stddev: 0.000006581029843447572",
            "extra": "mean: 694.3055755630385 usec\nrounds: 1244"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 622.6609654506383,
            "unit": "iter/sec",
            "range": "stddev: 0.000053925416635779834",
            "extra": "mean: 1.606010422182592 msec\nrounds: 559"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 131.15870862035445,
            "unit": "iter/sec",
            "range": "stddev: 0.000018497173165792072",
            "extra": "mean: 7.624350761904426 msec\nrounds: 126"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 988825.5549826294,
            "unit": "iter/sec",
            "range": "stddev: 4.802943335057918e-8",
            "extra": "mean: 1.011300724341117 usec\nrounds: 196040"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 139127.4877093816,
            "unit": "iter/sec",
            "range": "stddev: 3.819751466668869e-7",
            "extra": "mean: 7.187652249488354 usec\nrounds: 90910"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 4473.213183727352,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026213453501693174",
            "extra": "mean: 223.55294928437542 usec\nrounds: 3983"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 940.2892364716018,
            "unit": "iter/sec",
            "range": "stddev: 0.000012388919915709714",
            "extra": "mean: 1.0635025492288528 msec\nrounds: 843"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 451.5973768197523,
            "unit": "iter/sec",
            "range": "stddev: 0.000018234344795692545",
            "extra": "mean: 2.2143618438225197 msec\nrounds: 429"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 89.15584676135101,
            "unit": "iter/sec",
            "range": "stddev: 0.00022662798626588046",
            "extra": "mean: 11.21631431168796 msec\nrounds: 77"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 183006.68892652873,
            "unit": "iter/sec",
            "range": "stddev: 4.017397137124146e-7",
            "extra": "mean: 5.464281146584033 usec\nrounds: 40815"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 13415.946136544897,
            "unit": "iter/sec",
            "range": "stddev: 0.000001082237533145051",
            "extra": "mean: 74.53816449635337 usec\nrounds: 8985"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 264.0363265279567,
            "unit": "iter/sec",
            "range": "stddev: 0.002494184689607173",
            "extra": "mean: 3.787357645631076 msec\nrounds: 206"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 52.846614470606276,
            "unit": "iter/sec",
            "range": "stddev: 0.004015249620506154",
            "extra": "mean: 18.92268804761766 msec\nrounds: 42"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 19.739388999408565,
            "unit": "iter/sec",
            "range": "stddev: 0.00885437725898275",
            "extra": "mean: 50.66012934999975 msec\nrounds: 20"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 4.049041432684582,
            "unit": "iter/sec",
            "range": "stddev: 0.0007358953243793723",
            "extra": "mean: 246.97203439999953 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 985554.0938146035,
            "unit": "iter/sec",
            "range": "stddev: 6.205436470829467e-8",
            "extra": "mean: 1.014657649211806 usec\nrounds: 196079"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 512827.44288277626,
            "unit": "iter/sec",
            "range": "stddev: 1.568848715197113e-7",
            "extra": "mean: 1.9499736487943433 usec\nrounds: 188644"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 137107.3975630454,
            "unit": "iter/sec",
            "range": "stddev: 3.067570487589107e-7",
            "extra": "mean: 7.293552483484161 usec\nrounds: 93458"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 35958.00006366095,
            "unit": "iter/sec",
            "range": "stddev: 5.718405245388557e-7",
            "extra": "mean: 27.810222988752848 usec\nrounds: 26526"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 17914.39791421002,
            "unit": "iter/sec",
            "range": "stddev: 8.755498000114963e-7",
            "extra": "mean: 55.82102199520655 usec\nrounds: 14685"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 3865.6934041981012,
            "unit": "iter/sec",
            "range": "stddev: 0.000007776976120925696",
            "extra": "mean: 258.68580237481086 usec\nrounds: 3537"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 177987.0483259644,
            "unit": "iter/sec",
            "range": "stddev: 2.692869324916851e-7",
            "extra": "mean: 5.6183863343169 usec\nrounds: 41842"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 86051.02186762998,
            "unit": "iter/sec",
            "range": "stddev: 3.9706458556870845e-7",
            "extra": "mean: 11.621012491150582 usec\nrounds: 33784"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 11927.196163801125,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011940667328665928",
            "extra": "mean: 83.8420016126662 usec\nrounds: 1240"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 2416.5161347048393,
            "unit": "iter/sec",
            "range": "stddev: 0.0006439867360331472",
            "extra": "mean: 413.8188798487551 usec\nrounds: 2114"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 745.9191848588862,
            "unit": "iter/sec",
            "range": "stddev: 0.0034804947204100703",
            "extra": "mean: 1.3406278056639354 msec\nrounds: 1024"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 166.93518959428644,
            "unit": "iter/sec",
            "range": "stddev: 0.006815250579018606",
            "extra": "mean: 5.9903487241387845 msec\nrounds: 232"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1-1]",
            "value": 3797.00780013481,
            "unit": "iter/sec",
            "range": "stddev: 0.000022529828727535066",
            "extra": "mean: 263.36527408884854 usec\nrounds: 2003"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-10]",
            "value": 362.45127009242066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000346995226612095",
            "extra": "mean: 2.758991573529352 msec\nrounds: 340"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-100]",
            "value": 46.04983835071455,
            "unit": "iter/sec",
            "range": "stddev: 0.004353264596685328",
            "extra": "mean: 21.715602829786764 msec\nrounds: 47"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-10]",
            "value": 95.01812923162474,
            "unit": "iter/sec",
            "range": "stddev: 0.00008847114576431704",
            "extra": "mean: 10.524307393616539 msec\nrounds: 94"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-100]",
            "value": 12.258278753732238,
            "unit": "iter/sec",
            "range": "stddev: 0.00041685509424443376",
            "extra": "mean: 81.57752161538448 msec\nrounds: 13"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-10]",
            "value": 49.26989045814322,
            "unit": "iter/sec",
            "range": "stddev: 0.00012238963269033348",
            "extra": "mean: 20.296371489795387 msec\nrounds: 49"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-100]",
            "value": 6.261812736409336,
            "unit": "iter/sec",
            "range": "stddev: 0.0008202870970676982",
            "extra": "mean: 159.69816442856808 msec\nrounds: 7"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1-1]",
            "value": 4511.051678247593,
            "unit": "iter/sec",
            "range": "stddev: 0.000003565410203828642",
            "extra": "mean: 221.67779740188425 usec\nrounds: 2848"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-10]",
            "value": 834.8555477014254,
            "unit": "iter/sec",
            "range": "stddev: 0.000009710149577399164",
            "extra": "mean: 1.19781200802134 msec\nrounds: 748"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-100]",
            "value": 115.77067846026092,
            "unit": "iter/sec",
            "range": "stddev: 0.00007020684221598911",
            "extra": "mean: 8.63776573913106 msec\nrounds: 115"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-10]",
            "value": 237.8414174339908,
            "unit": "iter/sec",
            "range": "stddev: 0.00002013476951078339",
            "extra": "mean: 4.204482174672267 msec\nrounds: 229"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-100]",
            "value": 31.683206524896686,
            "unit": "iter/sec",
            "range": "stddev: 0.00013045021232143946",
            "extra": "mean: 31.562461937499897 msec\nrounds: 32"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-10]",
            "value": 120.95476487388255,
            "unit": "iter/sec",
            "range": "stddev: 0.0027132378789857347",
            "extra": "mean: 8.2675535853646 msec\nrounds: 123"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-100]",
            "value": 16.22122261708991,
            "unit": "iter/sec",
            "range": "stddev: 0.00033089334044919267",
            "extra": "mean: 61.6476343124992 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "terencelimxp@gmail.com",
            "name": "Terence Lim",
            "username": "terryyylim"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b87b176b580b72a90328c307400cc2253b3ae43",
          "message": "Add Observation service log key (#17)\n\n- Add Observation service log key",
          "timestamp": "2022-11-28T15:55:13+08:00",
          "tree_id": "16a4107f8ff4929d104583f028e7fbce7dfc6429",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/0b87b176b580b72a90328c307400cc2253b3ae43"
        },
        "date": 1669622224835,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 1089936.4553878615,
            "unit": "iter/sec",
            "range": "stddev: 4.868998029290502e-7",
            "extra": "mean: 917.4846800074624 nsec\nrounds: 59169"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 151892.7120156586,
            "unit": "iter/sec",
            "range": "stddev: 0.000001619962543150209",
            "extra": "mean: 6.583594345836094 usec\nrounds: 87720"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 3964.6888656286706,
            "unit": "iter/sec",
            "range": "stddev: 0.000032673729596109755",
            "extra": "mean: 252.22660185755396 usec\nrounds: 4521"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 733.7214330758375,
            "unit": "iter/sec",
            "range": "stddev: 0.00013056619709367903",
            "extra": "mean: 1.362915072288259 msec\nrounds: 581"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 355.6514285710916,
            "unit": "iter/sec",
            "range": "stddev: 0.0003066932012959295",
            "extra": "mean: 2.811741833901024 msec\nrounds: 295"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 60.992015405498705,
            "unit": "iter/sec",
            "range": "stddev: 0.0006613814888676274",
            "extra": "mean: 16.395588723402724 msec\nrounds: 47"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 132899.88413653002,
            "unit": "iter/sec",
            "range": "stddev: 0.000001756021086868992",
            "extra": "mean: 7.524461036946318 usec\nrounds: 26525"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 6906.655483091363,
            "unit": "iter/sec",
            "range": "stddev: 0.000015066694210205066",
            "extra": "mean: 144.78787923448127 usec\nrounds: 5283"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 136.20443105842077,
            "unit": "iter/sec",
            "range": "stddev: 0.0004471257308603431",
            "extra": "mean: 7.34190504838334 msec\nrounds: 124"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 28.589343499080883,
            "unit": "iter/sec",
            "range": "stddev: 0.0013567229552871127",
            "extra": "mean: 34.97806796550431 msec\nrounds: 29"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 14.464818973120655,
            "unit": "iter/sec",
            "range": "stddev: 0.0018216889718085457",
            "extra": "mean: 69.1332537142882 msec\nrounds: 14"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 2.9171290111950263,
            "unit": "iter/sec",
            "range": "stddev: 0.002485809618941569",
            "extra": "mean: 342.8028024000014 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 1466528.0566419156,
            "unit": "iter/sec",
            "range": "stddev: 1.7491525289102648e-7",
            "extra": "mean: 681.8826243869671 nsec\nrounds: 188680"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 661433.5776846677,
            "unit": "iter/sec",
            "range": "stddev: 5.413458615286015e-7",
            "extra": "mean: 1.511867606571284 usec\nrounds: 188680"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 146358.77848987098,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016321280862246768",
            "extra": "mean: 6.832524911166888 usec\nrounds: 95239"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 32719.34303771442,
            "unit": "iter/sec",
            "range": "stddev: 0.000004730377203010225",
            "extra": "mean: 30.56296084084988 usec\nrounds: 25511"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 17390.097587222714,
            "unit": "iter/sec",
            "range": "stddev: 0.000008056204283645506",
            "extra": "mean: 57.50399012911492 usec\nrounds: 15601"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 3089.9888002472335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000350472339577688",
            "extra": "mean: 323.6257684558562 usec\nrounds: 2479"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 136419.67729779708,
            "unit": "iter/sec",
            "range": "stddev: 0.000001797209801916719",
            "extra": "mean: 7.330320814474966 usec\nrounds: 38315"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 50755.26915996868,
            "unit": "iter/sec",
            "range": "stddev: 0.000003840805913566207",
            "extra": "mean: 19.70238788111309 usec\nrounds: 19194"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 6169.9479844489,
            "unit": "iter/sec",
            "range": "stddev: 0.000016993209441716823",
            "extra": "mean: 162.07592065937328 usec\nrounds: 5092"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 1308.6323701494666,
            "unit": "iter/sec",
            "range": "stddev: 0.00005899735236424659",
            "extra": "mean: 764.1565521459509 usec\nrounds: 978"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 534.3915204450034,
            "unit": "iter/sec",
            "range": "stddev: 0.00009741420560681087",
            "extra": "mean: 1.8712871775496565 msec\nrounds: 490"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 112.36923182014299,
            "unit": "iter/sec",
            "range": "stddev: 0.00020912607555543443",
            "extra": "mean: 8.899233213595243 msec\nrounds: 103"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 872322.7232070118,
            "unit": "iter/sec",
            "range": "stddev: 1.5585687424670211e-7",
            "extra": "mean: 1.1463647264887218 usec\nrounds: 181819"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 102632.50308922867,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012853903817370277",
            "extra": "mean: 9.743502008623917 usec\nrounds: 71943"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 3400.354725488456,
            "unit": "iter/sec",
            "range": "stddev: 0.000012660174311765472",
            "extra": "mean: 294.08696466406207 usec\nrounds: 2830"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 717.1809123365347,
            "unit": "iter/sec",
            "range": "stddev: 0.000044042388762870525",
            "extra": "mean: 1.394348319647907 msec\nrounds: 682"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 347.5555086310948,
            "unit": "iter/sec",
            "range": "stddev: 0.00008649699085013863",
            "extra": "mean: 2.877238240126495 msec\nrounds: 329"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 65.98520034095544,
            "unit": "iter/sec",
            "range": "stddev: 0.0002495611281148858",
            "extra": "mean: 15.154913447755707 msec\nrounds: 67"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 164227.78343986624,
            "unit": "iter/sec",
            "range": "stddev: 9.519001778330234e-7",
            "extra": "mean: 6.089103676943681 usec\nrounds: 35842"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 11172.447594579698,
            "unit": "iter/sec",
            "range": "stddev: 0.000004818387534014628",
            "extra": "mean: 89.50590204470048 usec\nrounds: 8065"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 215.2616400294886,
            "unit": "iter/sec",
            "range": "stddev: 0.0036816540662578984",
            "extra": "mean: 4.645509529068953 msec\nrounds: 172"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 45.3123863233819,
            "unit": "iter/sec",
            "range": "stddev: 0.0006819067466254263",
            "extra": "mean: 22.069020882353843 msec\nrounds: 34"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 15.394240621716623,
            "unit": "iter/sec",
            "range": "stddev: 0.012104080432140375",
            "extra": "mean: 64.95935880002435 msec\nrounds: 10"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 3.1916091237789272,
            "unit": "iter/sec",
            "range": "stddev: 0.02387532570388125",
            "extra": "mean: 313.32157579997784 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 724397.0307240185,
            "unit": "iter/sec",
            "range": "stddev: 4.4484670191267426e-7",
            "extra": "mean: 1.3804584469383074 usec\nrounds: 192308"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 400422.41862825514,
            "unit": "iter/sec",
            "range": "stddev: 5.250063927091997e-7",
            "extra": "mean: 2.4973626687180612 usec\nrounds: 136968"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 105375.96314872243,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011642395659827082",
            "extra": "mean: 9.48983022426708 usec\nrounds: 76336"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 25765.462158709925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025007644477174676",
            "extra": "mean: 38.81164614242921 usec\nrounds: 19960"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 13526.023626546656,
            "unit": "iter/sec",
            "range": "stddev: 0.000004221712024748193",
            "extra": "mean: 73.93155798111755 usec\nrounds: 12642"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 2763.7106845128233,
            "unit": "iter/sec",
            "range": "stddev: 0.000014951718326675248",
            "extra": "mean: 361.83237471409797 usec\nrounds: 2618"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 162551.59925715288,
            "unit": "iter/sec",
            "range": "stddev: 8.998156391618534e-7",
            "extra": "mean: 6.151892719419039 usec\nrounds: 36232"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 75974.28477930096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013233349386962012",
            "extra": "mean: 13.162348324895952 usec\nrounds: 27549"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 10114.069606703228,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054782037619122095",
            "extra": "mean: 98.87216905618656 usec\nrounds: 1047"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 2099.8178016486086,
            "unit": "iter/sec",
            "range": "stddev: 0.00001682313400310615",
            "extra": "mean: 476.2317945942168 usec\nrounds: 185"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 580.8141319792564,
            "unit": "iter/sec",
            "range": "stddev: 0.004895232187454804",
            "extra": "mean: 1.7217211926167708 msec\nrounds: 867"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 132.09070714384828,
            "unit": "iter/sec",
            "range": "stddev: 0.009898959687033922",
            "extra": "mean: 7.570555276920342 msec\nrounds: 195"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1-1]",
            "value": 2775.8932346827482,
            "unit": "iter/sec",
            "range": "stddev: 0.00003177285043027157",
            "extra": "mean: 360.2444025965171 usec\nrounds: 1694"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-10]",
            "value": 317.7684067143171,
            "unit": "iter/sec",
            "range": "stddev: 0.00009272915648378876",
            "extra": "mean: 3.146945948276817 msec\nrounds: 290"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-100]",
            "value": 41.19141567908431,
            "unit": "iter/sec",
            "range": "stddev: 0.005848381333958165",
            "extra": "mean: 24.276902930232822 msec\nrounds: 43"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-10]",
            "value": 85.39250660693436,
            "unit": "iter/sec",
            "range": "stddev: 0.00018206586727313113",
            "extra": "mean: 11.710629418609832 msec\nrounds: 86"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-100]",
            "value": 10.937938777979875,
            "unit": "iter/sec",
            "range": "stddev: 0.0008243190738391708",
            "extra": "mean: 91.42490374998147 msec\nrounds: 12"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-10]",
            "value": 43.921695172037815,
            "unit": "iter/sec",
            "range": "stddev: 0.0003630713372609795",
            "extra": "mean: 22.767791545455587 msec\nrounds: 44"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-100]",
            "value": 5.677824380791893,
            "unit": "iter/sec",
            "range": "stddev: 0.0008560816425476479",
            "extra": "mean: 176.1237990000192 msec\nrounds: 6"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1-1]",
            "value": 3790.1938012866153,
            "unit": "iter/sec",
            "range": "stddev: 0.000014409170838148438",
            "extra": "mean: 263.8387513748086 usec\nrounds: 2365"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-10]",
            "value": 683.1359373966012,
            "unit": "iter/sec",
            "range": "stddev: 0.000051517167558527486",
            "extra": "mean: 1.4638374959615692 msec\nrounds: 619"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-100]",
            "value": 97.83919836961546,
            "unit": "iter/sec",
            "range": "stddev: 0.000193133289057959",
            "extra": "mean: 10.2208523440903 msec\nrounds: 93"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-10]",
            "value": 194.34767052610772,
            "unit": "iter/sec",
            "range": "stddev: 0.00011360510046635608",
            "extra": "mean: 5.145417988767017 msec\nrounds: 178"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-100]",
            "value": 24.704943034970118,
            "unit": "iter/sec",
            "range": "stddev: 0.0009839032057490733",
            "extra": "mean: 40.47772943999462 msec\nrounds: 25"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-10]",
            "value": 100.55797471405204,
            "unit": "iter/sec",
            "range": "stddev: 0.00011765769228181625",
            "extra": "mean: 9.944512136840594 msec\nrounds: 95"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-100]",
            "value": 11.874811813348963,
            "unit": "iter/sec",
            "range": "stddev: 0.011515191176854319",
            "extra": "mean: 84.21186084615329 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pradithya.pura@go-jek.com",
            "name": "aria",
            "username": "pradithya"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dd721fc2eb9c6086dab1acb819d30c47536d0a0",
          "message": "Add prediction log and router log proto (#19)\n\nThis PR adds prediction log and router log protobuf definition for\r\nrecording and publishing the prediction process within CaraML. Note that\r\nthe main changes are in [this\r\ncommit](https://github.com/caraml-dev/universal-prediction-interface/pull/19/commits/adeb40ebe6b27775aeae9430451a4ad49f7740c5).\r\n\r\nHigh level idea is as follow:\r\n- Each request to Turing router and Merlin model will be translated into\r\none `RouterLog` and `PredictionLog` respectively. That means, unlike\r\nobservation log which allow `ObservationLog` from different [row_id of\r\nthe same\r\nprediction_id](https://github.com/caraml-dev/universal-prediction-interface/blob/0b87b176b580b72a90328c307400cc2253b3ae43/proto/caraml/upi/v1/observation_log.proto#L44),\r\n`RouterLog` and `PredictionLog` will contains all `row_id` of the same\r\n`prediction_id` . The reason for not extracting multiple row_id into\r\nseveral `RouterLog` and `PredictionLog` is to minimise the number of\r\npublished logs.\r\n- All of the [UPI\r\nTable](https://github.com/caraml-dev/universal-prediction-interface/blob/0b87b176b580b72a90328c307400cc2253b3ae43/proto/caraml/upi/v1/table.proto#L10)\r\nis stored as `google.protobuf.Struct` . The primary reason is because we\r\nwant to use JSON as the representation of the table which allow better\r\nschema flexibility. However, using the existing UPI Table protobuf\r\ndirectly is suboptimal because of its verbosity when encoded as JSON\r\nusing `protojson`. To solve this, we'll encode all table as slightly\r\nmodified pandas JSON split format. For example following table (let's\r\ncall it `my-table`).\r\n\r\n| row_id  | feature_1 | feature_2 | feature_3 |\r\n| ------- | --------- | --------- | --------- |\r\n| 1            | 111           | yes          | 1.1.           |\r\n| 2           | 222          | no            | null         |\r\n\r\nWill be encoded as following JSON\r\n\r\n```\r\n{\r\n  \"name\" : \"my-table\",\r\n  \"columns\": [\"feature_1\", \"feature_2\", \"feature_3\"],\r\n  \"column_types: [\"INT64\", \"STRING\", \"FLOAT64\"],\r\n  \"row_ids\": [\"1\", \"2\"],\r\n  \"data\": [[111,\"yes\", 1.1], [222,\"no\", null]]\r\n}\r\n```\r\n`table_schema_version` is added to both `RouterLog` and `PredictionLog`\r\nto let the consumer knows about the encoding.\r\n\r\n- Currently, user of Turing and Merlin use payload logging for debugging\r\npurpose, as such I added transport level information such as `headers`,\r\n`status`, and `message`. That means, we will log all request and\r\nresponse even for failure case.",
          "timestamp": "2022-12-16T11:18:53+08:00",
          "tree_id": "ac6922fadb3a54835cc951f3cbbbd458650c6f8f",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/5dd721fc2eb9c6086dab1acb819d30c47536d0a0"
        },
        "date": 1671160846139,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 1290879.6745304405,
            "unit": "iter/sec",
            "range": "stddev: 1.1295662770094958e-7",
            "extra": "mean: 774.6655398875589 nsec\nrounds: 76924"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 165582.40352961156,
            "unit": "iter/sec",
            "range": "stddev: 2.830584489060222e-7",
            "extra": "mean: 6.039289071082768 usec\nrounds: 93458"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 4514.541951161384,
            "unit": "iter/sec",
            "range": "stddev: 0.000004077555760659905",
            "extra": "mean: 221.50641434237778 usec\nrounds: 4267"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 859.7672978328214,
            "unit": "iter/sec",
            "range": "stddev: 0.000014462231395370799",
            "extra": "mean: 1.1631054152916227 msec\nrounds: 667"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 413.9535492325187,
            "unit": "iter/sec",
            "range": "stddev: 0.000024942852566961974",
            "extra": "mean: 2.4157299819122886 msec\nrounds: 387"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 77.20993011009183,
            "unit": "iter/sec",
            "range": "stddev: 0.00020851158360243231",
            "extra": "mean: 12.951701919353164 msec\nrounds: 62"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 139700.5815439981,
            "unit": "iter/sec",
            "range": "stddev: 8.784305618986806e-7",
            "extra": "mean: 7.1581663365163175 usec\nrounds: 26248"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 8128.136029783249,
            "unit": "iter/sec",
            "range": "stddev: 0.000001393543612623835",
            "extra": "mean: 123.02943704876293 usec\nrounds: 6235"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 160.8229758501271,
            "unit": "iter/sec",
            "range": "stddev: 0.0000903261264449316",
            "extra": "mean: 6.218017013513742 msec\nrounds: 148"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 32.22516827172214,
            "unit": "iter/sec",
            "range": "stddev: 0.00013224705315393419",
            "extra": "mean: 31.031645562499932 msec\nrounds: 32"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 15.914618105691675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000986629706747457",
            "extra": "mean: 62.83531237500206 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 3.251611997540664,
            "unit": "iter/sec",
            "range": "stddev: 0.0006187945065284202",
            "extra": "mean: 307.5397682000016 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 1707208.0692949956,
            "unit": "iter/sec",
            "range": "stddev: 1.939293288974768e-8",
            "extra": "mean: 585.7516831050712 nsec\nrounds: 82645"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 867170.6811807014,
            "unit": "iter/sec",
            "range": "stddev: 4.9162208179437796e-8",
            "extra": "mean: 1.153175518616652 usec\nrounds: 169492"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 154191.8462374266,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011061235778885746",
            "extra": "mean: 6.485427241465071 usec\nrounds: 107527"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 35814.13795165434,
            "unit": "iter/sec",
            "range": "stddev: 5.542874779937009e-7",
            "extra": "mean: 27.92193410741603 usec\nrounds: 30489"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 19466.670764269977,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010924383073459002",
            "extra": "mean: 51.36985220068785 usec\nrounds: 15291"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 3536.5016194628834,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037101735959454943",
            "extra": "mean: 282.7653165762944 usec\nrounds: 3143"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 140113.08881408628,
            "unit": "iter/sec",
            "range": "stddev: 4.787136151610055e-7",
            "extra": "mean: 7.13709196238535 usec\nrounds: 30121"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 53991.37483305354,
            "unit": "iter/sec",
            "range": "stddev: 4.889459088697755e-7",
            "extra": "mean: 18.521476867223612 usec\nrounds: 23149"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 7069.384223894652,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016713159325643048",
            "extra": "mean: 141.4550360157227 usec\nrounds: 5331"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 1568.9608285429488,
            "unit": "iter/sec",
            "range": "stddev: 0.00005086538813901242",
            "extra": "mean: 637.364542063598 usec\nrounds: 1260"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 655.9382326830622,
            "unit": "iter/sec",
            "range": "stddev: 0.00005556166865879613",
            "extra": "mean: 1.524533790185672 msec\nrounds: 591"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 140.86804941034515,
            "unit": "iter/sec",
            "range": "stddev: 0.000040277670956937966",
            "extra": "mean: 7.098841818182807 msec\nrounds: 132"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 1138424.8495497596,
            "unit": "iter/sec",
            "range": "stddev: 4.550096956434367e-8",
            "extra": "mean: 878.4066865680608 nsec\nrounds: 178572"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 139584.89151896592,
            "unit": "iter/sec",
            "range": "stddev: 5.037440626487141e-7",
            "extra": "mean: 7.164099130772519 usec\nrounds: 94340"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 4466.509696068461,
            "unit": "iter/sec",
            "range": "stddev: 0.000003371768873281071",
            "extra": "mean: 223.88846505364717 usec\nrounds: 3348"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 936.7409074469662,
            "unit": "iter/sec",
            "range": "stddev: 0.000030191761224594606",
            "extra": "mean: 1.0675310451909727 msec\nrounds: 863"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 453.6782277705721,
            "unit": "iter/sec",
            "range": "stddev: 0.00002293681674490572",
            "extra": "mean: 2.2042054010705274 msec\nrounds: 374"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 88.25493431156993,
            "unit": "iter/sec",
            "range": "stddev: 0.00021217345241830387",
            "extra": "mean: 11.330811220930265 msec\nrounds: 86"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 178071.12790793076,
            "unit": "iter/sec",
            "range": "stddev: 4.557521067365392e-7",
            "extra": "mean: 5.615733509123592 usec\nrounds: 45874"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 12887.290637207418,
            "unit": "iter/sec",
            "range": "stddev: 0.000001292828932380109",
            "extra": "mean: 77.59582895669782 usec\nrounds: 8454"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 267.6805484437756,
            "unit": "iter/sec",
            "range": "stddev: 0.0018852270490015122",
            "extra": "mean: 3.735796290816562 msec\nrounds: 196"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 54.05955234885026,
            "unit": "iter/sec",
            "range": "stddev: 0.00038156777987447546",
            "extra": "mean: 18.49811839999944 msec\nrounds: 40"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 18.274849302394713,
            "unit": "iter/sec",
            "range": "stddev: 0.0095865964651067",
            "extra": "mean: 54.72001347058775 msec\nrounds: 17"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 3.889545305409327,
            "unit": "iter/sec",
            "range": "stddev: 0.0006603226987303656",
            "extra": "mean: 257.09946059999993 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 1138425.255928486,
            "unit": "iter/sec",
            "range": "stddev: 4.5589674794302825e-8",
            "extra": "mean: 878.4063730071041 nsec\nrounds: 181819"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 526357.8606301608,
            "unit": "iter/sec",
            "range": "stddev: 1.658699881462502e-7",
            "extra": "mean: 1.899848135264457 usec\nrounds: 175439"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 138261.43223240742,
            "unit": "iter/sec",
            "range": "stddev: 3.511941932658264e-7",
            "extra": "mean: 7.232674968382163 usec\nrounds: 86207"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 35861.193848933115,
            "unit": "iter/sec",
            "range": "stddev: 7.285387987187781e-7",
            "extra": "mean: 27.88529584967374 usec\nrounds: 26456"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 17729.732762055533,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011789232876945568",
            "extra": "mean: 56.40242937785054 usec\nrounds: 14882"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 3876.3427520722357,
            "unit": "iter/sec",
            "range": "stddev: 0.000003242408362974904",
            "extra": "mean: 257.9751234499103 usec\nrounds: 3548"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 177695.78912564248,
            "unit": "iter/sec",
            "range": "stddev: 2.961574729457483e-7",
            "extra": "mean: 5.627595369144819 usec\nrounds: 45046"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 83792.612957817,
            "unit": "iter/sec",
            "range": "stddev: 4.212391434871449e-7",
            "extra": "mean: 11.934226236666252 usec\nrounds: 35843"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 11928.82432004452,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016064394601873385",
            "extra": "mean: 83.83055808103877 usec\nrounds: 1188"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 2304.305067912673,
            "unit": "iter/sec",
            "range": "stddev: 0.0009272426616919405",
            "extra": "mean: 433.9703166585655 usec\nrounds: 2059"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 718.3037589695193,
            "unit": "iter/sec",
            "range": "stddev: 0.003809771833153862",
            "extra": "mean: 1.3921686856193025 msec\nrounds: 897"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 161.3427628468967,
            "unit": "iter/sec",
            "range": "stddev: 0.007378099824532371",
            "extra": "mean: 6.197984851349868 msec\nrounds: 222"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1-1]",
            "value": 3839.8497996442898,
            "unit": "iter/sec",
            "range": "stddev: 0.000023213256229429092",
            "extra": "mean: 260.42685317864164 usec\nrounds: 1982"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-10]",
            "value": 362.5568890814497,
            "unit": "iter/sec",
            "range": "stddev: 0.00004679224145410151",
            "extra": "mean: 2.7581878323524185 msec\nrounds: 340"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-100]",
            "value": 47.565529603171036,
            "unit": "iter/sec",
            "range": "stddev: 0.00021357583083221523",
            "extra": "mean: 21.023627999998833 msec\nrounds: 48"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-10]",
            "value": 94.29298244037403,
            "unit": "iter/sec",
            "range": "stddev: 0.00011929502248609987",
            "extra": "mean: 10.60524308510814 msec\nrounds: 94"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-100]",
            "value": 11.615728212124516,
            "unit": "iter/sec",
            "range": "stddev: 0.008714621524768916",
            "extra": "mean: 86.090168583335 msec\nrounds: 12"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-10]",
            "value": 48.734754546607746,
            "unit": "iter/sec",
            "range": "stddev: 0.00019542028129415992",
            "extra": "mean: 20.519237437497395 msec\nrounds: 48"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-100]",
            "value": 6.122553928734221,
            "unit": "iter/sec",
            "range": "stddev: 0.0021035074792880816",
            "extra": "mean: 163.33053357142748 msec\nrounds: 7"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1-1]",
            "value": 4547.502403775866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034515421060159932",
            "extra": "mean: 219.90092829190888 usec\nrounds: 3068"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-10]",
            "value": 828.1250803107313,
            "unit": "iter/sec",
            "range": "stddev: 0.000011497121293164659",
            "extra": "mean: 1.2075470527046195 msec\nrounds: 721"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-100]",
            "value": 117.78754772073104,
            "unit": "iter/sec",
            "range": "stddev: 0.00003946317509387105",
            "extra": "mean: 8.489861783785114 msec\nrounds: 111"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-10]",
            "value": 231.077021807224,
            "unit": "iter/sec",
            "range": "stddev: 0.000016832808473607035",
            "extra": "mean: 4.3275614000004285 msec\nrounds: 220"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-100]",
            "value": 31.38473498365989,
            "unit": "iter/sec",
            "range": "stddev: 0.00010754588689688013",
            "extra": "mean: 31.862623677422757 msec\nrounds: 31"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-10]",
            "value": 123.031642006649,
            "unit": "iter/sec",
            "range": "stddev: 0.00003658709858400933",
            "extra": "mean: 8.127990358333648 msec\nrounds: 120"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-100]",
            "value": 15.197570655413172,
            "unit": "iter/sec",
            "range": "stddev: 0.007254920336033365",
            "extra": "mean: 65.79999018749838 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "leenj.leon@gmail.com",
            "name": "leonlnj",
            "username": "leonlnj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9017693aa818e266ed34af0818d5dda9357b755e",
          "message": "add ruby codegen (#22)\n\n## Description\r\nTo add Ruby codegen for UPI to support fluentd parser which is written\r\nin Ruby.\r\n\r\nBuf is upgraded and some of the yaml syntax are changed. Custom remote\r\nplugins will [deprecated](https://buf.build/grpc/plugins). The plugin\r\nthat can be ported are following the yaml syntax in the [curated\r\nplugins](https://buf.build/plugins).\r\n\r\nPython plugin are not moved as the\r\n[dependencies](https://buf.build/jeffsawatzky/plugins/mypy-protobuf) are\r\nnot migrated yet\r\n\r\n## Key Changes\r\n- `buf.gen.yaml` - added Ruby codegen plugin, modified yaml syntax for\r\nGo plugin\r\n- `.github/workflows/ci.yaml` - upgrade buf to v1.11\r\n- `.github/workflows/publish-ruby.yaml` - to publish proto to ruby gem\r\n(version will take from gemspec)\r\n\r\n`caraml-upi-protos` v0.0.0 was published manually as part of testing.\r\nBefore show CI trying to re-push (and expected rejection)\r\n\r\n![image](https://user-images.githubusercontent.com/30390872/212017585-efed74e2-287b-46d4-9f28-03e579787745.png)\r\n\r\nCo-authored-by: ningjie.lee <ningjie.lee@gojek.com>",
          "timestamp": "2023-01-16T19:03:07+08:00",
          "tree_id": "786a0b279101f78cb078c01e9d32dfcbcb7d8c88",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/9017693aa818e266ed34af0818d5dda9357b755e"
        },
        "date": 1673867098692,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 1309154.9519744834,
            "unit": "iter/sec",
            "range": "stddev: 1.48584197752709e-7",
            "extra": "mean: 763.8515200143328 nsec\nrounds: 72993"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 163738.29982146405,
            "unit": "iter/sec",
            "range": "stddev: 3.2509477611249034e-7",
            "extra": "mean: 6.107306605054369 usec\nrounds: 95230"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 4361.7557997837275,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032151260910559514",
            "extra": "mean: 229.26547149879042 usec\nrounds: 4070"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 812.4414701073109,
            "unit": "iter/sec",
            "range": "stddev: 0.00001006852055769421",
            "extra": "mean: 1.2308578978223692 msec\nrounds: 597"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 381.7013853757664,
            "unit": "iter/sec",
            "range": "stddev: 0.00008921846699427575",
            "extra": "mean: 2.6198490189275803 msec\nrounds: 317"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 63.63653983672742,
            "unit": "iter/sec",
            "range": "stddev: 0.000520581352180361",
            "extra": "mean: 15.714242203704112 msec\nrounds: 54"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 138396.7548715116,
            "unit": "iter/sec",
            "range": "stddev: 9.767360447082432e-7",
            "extra": "mean: 7.225602948048934 usec\nrounds: 25576"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 7924.306123981554,
            "unit": "iter/sec",
            "range": "stddev: 0.000002521649755098011",
            "extra": "mean: 126.19401425869597 usec\nrounds: 5821"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 157.74243716215125,
            "unit": "iter/sec",
            "range": "stddev: 0.00003711388282250954",
            "extra": "mean: 6.33944814084526 msec\nrounds: 142"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 31.24817009203998,
            "unit": "iter/sec",
            "range": "stddev: 0.0001869857099848529",
            "extra": "mean: 32.001873935483204 msec\nrounds: 31"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 15.893793870738989,
            "unit": "iter/sec",
            "range": "stddev: 0.0001902521001387208",
            "extra": "mean: 62.91763993749999 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 3.230808291042609,
            "unit": "iter/sec",
            "range": "stddev: 0.00039965548700895753",
            "extra": "mean: 309.520067400004 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 1782223.479475567,
            "unit": "iter/sec",
            "range": "stddev: 2.433583607459799e-8",
            "extra": "mean: 561.0968610368036 nsec\nrounds: 87720"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 882324.733939417,
            "unit": "iter/sec",
            "range": "stddev: 6.438184448692976e-8",
            "extra": "mean: 1.1333695651193922 usec\nrounds: 172414"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 156870.65723167735,
            "unit": "iter/sec",
            "range": "stddev: 3.598015173381334e-7",
            "extra": "mean: 6.374678462162184 usec\nrounds: 107527"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 36153.20568594897,
            "unit": "iter/sec",
            "range": "stddev: 7.31924943702141e-7",
            "extra": "mean: 27.660064468049438 usec\nrounds: 28169"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 19369.675513209466,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012758922490584545",
            "extra": "mean: 51.62709098136589 usec\nrounds: 12563"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 3396.6603630670093,
            "unit": "iter/sec",
            "range": "stddev: 0.000004200476756738605",
            "extra": "mean: 294.40682703320135 usec\nrounds: 2619"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 138865.58580465787,
            "unit": "iter/sec",
            "range": "stddev: 4.316131637059525e-7",
            "extra": "mean: 7.2012082346068045 usec\nrounds: 35460"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 53260.14311780787,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013232328633022025",
            "extra": "mean: 18.775766294658034 usec\nrounds: 23474"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 7011.813291953833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020805428454302107",
            "extra": "mean: 142.61646144336385 usec\nrounds: 4850"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 1528.3897422364928,
            "unit": "iter/sec",
            "range": "stddev: 0.000006091067781417524",
            "extra": "mean: 654.2833757420408 usec\nrounds: 1179"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 642.3818697857507,
            "unit": "iter/sec",
            "range": "stddev: 0.00007358924310611213",
            "extra": "mean: 1.5567064499088732 msec\nrounds: 549"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 137.99934646181342,
            "unit": "iter/sec",
            "range": "stddev: 0.00005192704573219812",
            "extra": "mean: 7.2464111290318005 msec\nrounds: 124"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 1211740.9225289354,
            "unit": "iter/sec",
            "range": "stddev: 5.4596509522608775e-8",
            "extra": "mean: 825.258915835955 nsec\nrounds: 200000"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 128900.1904457868,
            "unit": "iter/sec",
            "range": "stddev: 4.7202716885991613e-7",
            "extra": "mean: 7.7579404385797455 usec\nrounds: 89286"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 4155.604859435902,
            "unit": "iter/sec",
            "range": "stddev: 0.000003422955122957711",
            "extra": "mean: 240.63885615336005 usec\nrounds: 3754"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 894.4138456832484,
            "unit": "iter/sec",
            "range": "stddev: 0.000009343465141993693",
            "extra": "mean: 1.1180506706446316 msec\nrounds: 838"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 425.6130963004983,
            "unit": "iter/sec",
            "range": "stddev: 0.00002223140662050137",
            "extra": "mean: 2.349551761193842 msec\nrounds: 402"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 81.48483792231414,
            "unit": "iter/sec",
            "range": "stddev: 0.00012640049322799597",
            "extra": "mean: 12.272221746987801 msec\nrounds: 83"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 181378.03890028942,
            "unit": "iter/sec",
            "range": "stddev: 4.3105037324051e-7",
            "extra": "mean: 5.513346632608256 usec\nrounds: 39526"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 12778.382073873703,
            "unit": "iter/sec",
            "range": "stddev: 0.000001782278156879763",
            "extra": "mean: 78.25716856945215 usec\nrounds: 8584"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 247.54026594477907,
            "unit": "iter/sec",
            "range": "stddev: 0.0033972134531269336",
            "extra": "mean: 4.039746811224154 msec\nrounds: 196"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 51.759683172658264,
            "unit": "iter/sec",
            "range": "stddev: 0.0004456713000747918",
            "extra": "mean: 19.32005643589882 msec\nrounds: 39"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 17.671355620818712,
            "unit": "iter/sec",
            "range": "stddev: 0.011949899907574335",
            "extra": "mean: 56.58875422222249 msec\nrounds: 18"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 3.602447764404731,
            "unit": "iter/sec",
            "range": "stddev: 0.024471511869829213",
            "extra": "mean: 277.5890354000012 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 1225841.2336709346,
            "unit": "iter/sec",
            "range": "stddev: 3.2906445814860727e-8",
            "extra": "mean: 815.7663264479978 nsec\nrounds: 61725"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 531454.0619828847,
            "unit": "iter/sec",
            "range": "stddev: 1.923994641341073e-7",
            "extra": "mean: 1.8816301756523308 usec\nrounds: 147059"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 136378.16417422763,
            "unit": "iter/sec",
            "range": "stddev: 3.865294249664775e-7",
            "extra": "mean: 7.33255214318963 usec\nrounds: 87720"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 31582.730320025323,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010511894038783238",
            "extra": "mean: 31.662873661240766 usec\nrounds: 23809"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 17342.32243266877,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012195363909388208",
            "extra": "mean: 57.662403860986934 usec\nrounds: 14245"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 3422.2604690024405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035119040122469253",
            "extra": "mean: 292.20452652789794 usec\nrounds: 3223"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 178368.70531272804,
            "unit": "iter/sec",
            "range": "stddev: 3.2845534662227564e-7",
            "extra": "mean: 5.606364626837048 usec\nrounds: 45249"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 83109.12681695426,
            "unit": "iter/sec",
            "range": "stddev: 4.417442462856181e-7",
            "extra": "mean: 12.032372836770078 usec\nrounds: 38022"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 11407.307008606926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014409627351532925",
            "extra": "mean: 87.66310920232884 usec\nrounds: 815"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 2236.4684942581503,
            "unit": "iter/sec",
            "range": "stddev: 0.0011615998086350234",
            "extra": "mean: 447.13350649355147 usec\nrounds: 2079"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 644.9868029755063,
            "unit": "iter/sec",
            "range": "stddev: 0.004775596685388941",
            "extra": "mean: 1.5504193192584987 msec\nrounds: 971"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 165.30972523106405,
            "unit": "iter/sec",
            "range": "stddev: 0.007995369103244901",
            "extra": "mean: 6.049250874999856 msec\nrounds: 24"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1-1]",
            "value": 3214.2001091115503,
            "unit": "iter/sec",
            "range": "stddev: 0.00002508423377871744",
            "extra": "mean: 311.1193970671646 usec\nrounds: 1773"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-10]",
            "value": 362.03030472839333,
            "unit": "iter/sec",
            "range": "stddev: 0.0002989943222166884",
            "extra": "mean: 2.762199702453726 msec\nrounds: 326"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-100]",
            "value": 47.50591327916779,
            "unit": "iter/sec",
            "range": "stddev: 0.005217170412527127",
            "extra": "mean: 21.050011061223366 msec\nrounds: 49"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-10]",
            "value": 98.24677595203863,
            "unit": "iter/sec",
            "range": "stddev: 0.00013246767516765195",
            "extra": "mean: 10.178451051545675 msec\nrounds: 97"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-100]",
            "value": 12.735139335052013,
            "unit": "iter/sec",
            "range": "stddev: 0.0006170298301388567",
            "extra": "mean: 78.52289430769041 msec\nrounds: 13"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-10]",
            "value": 50.66891011504414,
            "unit": "iter/sec",
            "range": "stddev: 0.0002526756841392818",
            "extra": "mean: 19.735968224488992 msec\nrounds: 49"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-100]",
            "value": 6.596460294738317,
            "unit": "iter/sec",
            "range": "stddev: 0.0010547510840938196",
            "extra": "mean: 151.5964555714301 msec\nrounds: 7"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1-1]",
            "value": 4303.741896144139,
            "unit": "iter/sec",
            "range": "stddev: 0.000005976643588342063",
            "extra": "mean: 232.355941441547 usec\nrounds: 2886"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-10]",
            "value": 784.8598794870727,
            "unit": "iter/sec",
            "range": "stddev: 0.00004294816120019216",
            "extra": "mean: 1.274112776223862 msec\nrounds: 715"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-100]",
            "value": 116.97106565242461,
            "unit": "iter/sec",
            "range": "stddev: 0.00009046632135837756",
            "extra": "mean: 8.549122763158067 msec\nrounds: 114"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-10]",
            "value": 236.18649983299116,
            "unit": "iter/sec",
            "range": "stddev: 0.00001942090331856596",
            "extra": "mean: 4.233942247787684 msec\nrounds: 226"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-100]",
            "value": 30.67713147406143,
            "unit": "iter/sec",
            "range": "stddev: 0.000599051577624515",
            "extra": "mean: 32.597571935483415 msec\nrounds: 31"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-10]",
            "value": 119.26809580568805,
            "unit": "iter/sec",
            "range": "stddev: 0.003276206628948565",
            "extra": "mean: 8.384471918032489 msec\nrounds: 122"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-100]",
            "value": 15.552778349928078,
            "unit": "iter/sec",
            "range": "stddev: 0.000723130188724049",
            "extra": "mean: 64.29719356250096 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "leenj.leon@gmail.com",
            "name": "leonlnj",
            "username": "leonlnj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce0f30be060f2dfeeba03574d53bbe92a514bc20",
          "message": "update header proto (#23)\n\n## Description\r\n\r\nThis MR updates \r\n\r\nupdates the headers field of prediction and router log from map to\r\nheaders for ease of populating the data, as the generated proto of using\r\nmap create a map with 'key' and 'value' keys respectively which might be\r\nunexpected.\r\n\r\n`headers map[string]string protobuf:\"bytes,10,rep,name=headers,proto3\"\r\njson:\"headers,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\"\r\nprotobuf_val:\"bytes,2,opt,name=value,proto3\"`\r\n```\r\nmap<string,string> headers = 10;\r\n```\r\n```\r\nrepeated Header headers = 10;\r\n```\r\n\r\nCo-authored-by: ningjie.lee <ningjie.lee@gojek.com>",
          "timestamp": "2023-01-17T12:44:05+08:00",
          "tree_id": "7320de593f727b765773a283d1856117b635bce2",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/ce0f30be060f2dfeeba03574d53bbe92a514bc20"
        },
        "date": 1673930754903,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 1284134.294953232,
            "unit": "iter/sec",
            "range": "stddev: 9.648723700774663e-8",
            "extra": "mean: 778.7347506643921 nsec\nrounds: 78741"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 161960.3549804412,
            "unit": "iter/sec",
            "range": "stddev: 2.6500667278151374e-7",
            "extra": "mean: 6.174350507695312 usec\nrounds: 95239"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 4377.528059440617,
            "unit": "iter/sec",
            "range": "stddev: 0.000006663115653473062",
            "extra": "mean: 228.43942664019957 usec\nrounds: 4069"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 820.4697455321952,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070677604366352505",
            "extra": "mean: 1.2188139848488295 msec\nrounds: 594"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 231.70127925397452,
            "unit": "iter/sec",
            "range": "stddev: 0.00013254446915050302",
            "extra": "mean: 4.315901937269285 msec\nrounds: 271"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 65.26374606230216,
            "unit": "iter/sec",
            "range": "stddev: 0.000373263319924438",
            "extra": "mean: 15.322442555555707 msec\nrounds: 54"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 135913.22236559942,
            "unit": "iter/sec",
            "range": "stddev: 3.3276345302005764e-7",
            "extra": "mean: 7.357635869378864 usec\nrounds: 22989"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 7873.09289727239,
            "unit": "iter/sec",
            "range": "stddev: 0.00001773768504620407",
            "extra": "mean: 127.0148864046107 usec\nrounds: 6083"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 151.0769038496908,
            "unit": "iter/sec",
            "range": "stddev: 0.000044554255693864445",
            "extra": "mean: 6.619145445255605 msec\nrounds: 137"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 30.85737852640422,
            "unit": "iter/sec",
            "range": "stddev: 0.000191208133094443",
            "extra": "mean: 32.40715989999975 msec\nrounds: 30"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 15.582857819749178,
            "unit": "iter/sec",
            "range": "stddev: 0.00024013910358104822",
            "extra": "mean: 64.17308118749787 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 3.223755095132051,
            "unit": "iter/sec",
            "range": "stddev: 0.0005575000895575338",
            "extra": "mean: 310.1972607999983 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 1777751.5339022898,
            "unit": "iter/sec",
            "range": "stddev: 2.118656654168278e-8",
            "extra": "mean: 562.5083038487264 nsec\nrounds: 81968"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 887121.682962982,
            "unit": "iter/sec",
            "range": "stddev: 5.608792625527225e-8",
            "extra": "mean: 1.127241075498384 usec\nrounds: 172385"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 154305.2465364132,
            "unit": "iter/sec",
            "range": "stddev: 4.7470235227382843e-7",
            "extra": "mean: 6.480661043265423 usec\nrounds: 107527"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 36257.48439284585,
            "unit": "iter/sec",
            "range": "stddev: 5.688822390296378e-7",
            "extra": "mean: 27.58051245820339 usec\nrounds: 28736"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 19500.341340017258,
            "unit": "iter/sec",
            "range": "stddev: 7.751438152899299e-7",
            "extra": "mean: 51.28115362513521 usec\nrounds: 14620"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 3490.9214431420355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029415733655607495",
            "extra": "mean: 286.45731973273536 usec\nrounds: 2843"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 135627.9730620827,
            "unit": "iter/sec",
            "range": "stddev: 3.442042573816307e-7",
            "extra": "mean: 7.373110262012523 usec\nrounds: 35461"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 52180.55014835636,
            "unit": "iter/sec",
            "range": "stddev: 4.868292923179686e-7",
            "extra": "mean: 19.164228762572737 usec\nrounds: 22272"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 7031.58533585763,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014501945402383383",
            "extra": "mean: 142.2154396534863 usec\nrounds: 5311"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 1518.0141851083595,
            "unit": "iter/sec",
            "range": "stddev: 0.000006239593138390121",
            "extra": "mean: 658.7553725188791 usec\nrounds: 1310"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 668.0894601131187,
            "unit": "iter/sec",
            "range": "stddev: 0.00005977579630785019",
            "extra": "mean: 1.4968055323469456 msec\nrounds: 541"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 133.52607719317157,
            "unit": "iter/sec",
            "range": "stddev: 0.00008793062680639834",
            "extra": "mean: 7.48917380799935 msec\nrounds: 125"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 1183673.363817756,
            "unit": "iter/sec",
            "range": "stddev: 4.5466600636381615e-8",
            "extra": "mean: 844.8276615558173 nsec\nrounds: 185186"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 127510.78026022027,
            "unit": "iter/sec",
            "range": "stddev: 4.6200504279496044e-7",
            "extra": "mean: 7.842474165393931 usec\nrounds: 86957"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 4172.671262470106,
            "unit": "iter/sec",
            "range": "stddev: 0.000002626817587303903",
            "extra": "mean: 239.654632991152 usec\nrounds: 3801"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 898.1782787415383,
            "unit": "iter/sec",
            "range": "stddev: 0.000008888232892495433",
            "extra": "mean: 1.1133647112922023 msec\nrounds: 859"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 426.04225778033833,
            "unit": "iter/sec",
            "range": "stddev: 0.000017713821534165638",
            "extra": "mean: 2.3471850074449345 msec\nrounds: 403"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 82.69644064475429,
            "unit": "iter/sec",
            "range": "stddev: 0.00009751470266696384",
            "extra": "mean: 12.092418878047969 msec\nrounds: 82"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 178196.4870404618,
            "unit": "iter/sec",
            "range": "stddev: 4.3529658665899956e-7",
            "extra": "mean: 5.611782906657061 usec\nrounds: 43479"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 12696.269944182835,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014548931609774498",
            "extra": "mean: 78.76329066697096 usec\nrounds: 8711"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 249.42678541921532,
            "unit": "iter/sec",
            "range": "stddev: 0.0031565418112940898",
            "extra": "mean: 4.009192510416574 msec\nrounds: 192"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 49.58878998318648,
            "unit": "iter/sec",
            "range": "stddev: 0.005278619980660934",
            "extra": "mean: 20.16584797368637 msec\nrounds: 38"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 17.759873334687544,
            "unit": "iter/sec",
            "range": "stddev: 0.011669710697903827",
            "extra": "mean: 56.30670788889347 msec\nrounds: 18"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 3.6247879564290155,
            "unit": "iter/sec",
            "range": "stddev: 0.019609902669459476",
            "extra": "mean: 275.87820640001155 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 1198992.9526648622,
            "unit": "iter/sec",
            "range": "stddev: 4.208056564542704e-8",
            "extra": "mean: 834.0332591426461 nsec\nrounds: 188680"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 520234.1829201288,
            "unit": "iter/sec",
            "range": "stddev: 1.630509798130248e-7",
            "extra": "mean: 1.922211251838346 usec\nrounds: 188680"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 137915.0642167373,
            "unit": "iter/sec",
            "range": "stddev: 2.7040173219372556e-7",
            "extra": "mean: 7.250839534312746 usec\nrounds: 92593"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 32160.345755574082,
            "unit": "iter/sec",
            "range": "stddev: 5.743398074394956e-7",
            "extra": "mean: 31.094193066213485 usec\nrounds: 24691"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 17374.976783440165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010687045509420955",
            "extra": "mean: 57.55403373851326 usec\nrounds: 13812"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 3442.959987418106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034214833293608667",
            "extra": "mean: 290.44775531937137 usec\nrounds: 3290"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 178023.06147771253,
            "unit": "iter/sec",
            "range": "stddev: 2.5649440631816695e-7",
            "extra": "mean: 5.617249763594219 usec\nrounds: 46512"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 82458.89371908155,
            "unit": "iter/sec",
            "range": "stddev: 3.7722366218508854e-7",
            "extra": "mean: 12.127254622245719 usec\nrounds: 34722"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 11522.55216196526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012904388327590214",
            "extra": "mean: 86.78632875283441 usec\nrounds: 946"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 2284.185561362621,
            "unit": "iter/sec",
            "range": "stddev: 0.0008796189055067905",
            "extra": "mean: 437.7928032271837 usec\nrounds: 1921"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 647.3068356126333,
            "unit": "iter/sec",
            "range": "stddev: 0.004420961752274298",
            "extra": "mean: 1.544862412975395 msec\nrounds: 971"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 165.24820253585668,
            "unit": "iter/sec",
            "range": "stddev: 0.007759399336523779",
            "extra": "mean: 6.051503039998352 msec\nrounds: 25"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1-1]",
            "value": 3209.9067413931743,
            "unit": "iter/sec",
            "range": "stddev: 0.00002330220983155474",
            "extra": "mean: 311.5355306447242 usec\nrounds: 1860"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-10]",
            "value": 363.8262704648543,
            "unit": "iter/sec",
            "range": "stddev: 0.00003247349315338169",
            "extra": "mean: 2.7485645792490954 msec\nrounds: 347"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-100]",
            "value": 46.952868948812366,
            "unit": "iter/sec",
            "range": "stddev: 0.005301552076168666",
            "extra": "mean: 21.29795308333963 msec\nrounds: 48"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-10]",
            "value": 97.96684057564465,
            "unit": "iter/sec",
            "range": "stddev: 0.0000537725705594917",
            "extra": "mean: 10.207535469390326 msec\nrounds: 98"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-100]",
            "value": 12.515510484177197,
            "unit": "iter/sec",
            "range": "stddev: 0.00023011036557495622",
            "extra": "mean: 79.90085592307686 msec\nrounds: 13"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-10]",
            "value": 50.98177828142963,
            "unit": "iter/sec",
            "range": "stddev: 0.00009611104444212004",
            "extra": "mean: 19.614851300003693 msec\nrounds: 50"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-100]",
            "value": 6.4858575496245585,
            "unit": "iter/sec",
            "range": "stddev: 0.0004358477888358102",
            "extra": "mean: 154.1816162857117 msec\nrounds: 7"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1-1]",
            "value": 4286.4175909200985,
            "unit": "iter/sec",
            "range": "stddev: 0.000006326334917888014",
            "extra": "mean: 233.29504855483424 usec\nrounds: 2801"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-10]",
            "value": 795.2304017291348,
            "unit": "iter/sec",
            "range": "stddev: 0.000012165419643551871",
            "extra": "mean: 1.257497195561963 msec\nrounds: 721"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-100]",
            "value": 117.13726892096896,
            "unit": "iter/sec",
            "range": "stddev: 0.00013320346201192864",
            "extra": "mean: 8.536992617393935 msec\nrounds: 115"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-10]",
            "value": 230.50380790979452,
            "unit": "iter/sec",
            "range": "stddev: 0.000017184846363267163",
            "extra": "mean: 4.3383231238910405 msec\nrounds: 226"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-100]",
            "value": 30.285776972528787,
            "unit": "iter/sec",
            "range": "stddev: 0.00020997145150119674",
            "extra": "mean: 33.01879958064363 msec\nrounds: 31"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-10]",
            "value": 116.44114059462787,
            "unit": "iter/sec",
            "range": "stddev: 0.003224971203806164",
            "extra": "mean: 8.588029925620086 msec\nrounds: 121"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-100]",
            "value": 15.643645850923122,
            "unit": "iter/sec",
            "range": "stddev: 0.0008333928373047503",
            "extra": "mean: 63.923717625005594 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pradithya.pura@go-jek.com",
            "name": "aria",
            "username": "pradithya"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb29d10460f8d52019c7c7bc7ee5f03910face9a",
          "message": "UPI Table converter to google.protobuf.Struct (#21)\n\n`RouterLog` and `PredictionLog` use `google.protobuf.Struct` for\r\npublishing the UPI Table. This PR introduces the converter for\r\nconverting UPI Table into the corresponding `google.protobuf.Struct`.\r\nNote that `TableToStruct` accept `schemaVersion` which is determined by\r\n[table_schema_version](https://github.com/caraml-dev/universal-prediction-interface/blob/ce0f30be060f2dfeeba03574d53bbe92a514bc20/proto/caraml/upi/v1/prediction_log.proto#L33)\r\nand this PR add implementation for `TableSchemaV1` .\r\n\r\nExample usage:\r\n```go\r\npackage pkg\r\n\r\nimport (\r\n\t\"fmt\"\r\n\r\n\tupiv1 \"github.com/caraml-dev/universal-prediction-interface/gen/go/grpc/caraml/upi/v1\"\r\n\t\"github.com/caraml-dev/universal-prediction-interface/pkg/converter\"\r\n)\r\n\r\nfunc main() {\r\n\tvar upiTable upiv1.Table\r\n\tst, err := converter.TableToStruct(&upiTable, converter.TableSchemaV1)\r\n\tif err != nil {\r\n\t\t// conversion failed\r\n\t}\r\n\r\n\tfmt.Printf(\"%v\", st)\r\n}\r\n```",
          "timestamp": "2023-02-03T12:19:25+08:00",
          "tree_id": "927a6bd49dd590970a39cca9d180678db9d61d07",
          "url": "https://github.com/caraml-dev/universal-prediction-interface/commit/fb29d10460f8d52019c7c7bc7ee5f03910face9a"
        },
        "date": 1675398074648,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-1]",
            "value": 1218931.7583905838,
            "unit": "iter/sec",
            "range": "stddev: 9.751379143838173e-8",
            "extra": "mean: 820.3904715062555 nsec\nrounds: 66663"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1-100]",
            "value": 161319.705708325,
            "unit": "iter/sec",
            "range": "stddev: 3.2383669212201535e-7",
            "extra": "mean: 6.198870718299323 usec\nrounds: 90910"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-100]",
            "value": 4340.512517632468,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025975786827081575",
            "extra": "mean: 230.38753970589858 usec\nrounds: 4080"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[100-500]",
            "value": 812.5305955699807,
            "unit": "iter/sec",
            "range": "stddev: 0.000008195027365832413",
            "extra": "mean: 1.2307228865622122 msec\nrounds: 573"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-100]",
            "value": 394.8355685143395,
            "unit": "iter/sec",
            "range": "stddev: 0.000019112723128251346",
            "extra": "mean: 2.5326998876082314 msec\nrounds: 347"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_request[1000-500]",
            "value": 67.37769689131873,
            "unit": "iter/sec",
            "range": "stddev: 0.0003496452208198477",
            "extra": "mean: 14.841706471698126 msec\nrounds: 53"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-1]",
            "value": 139546.6296272085,
            "unit": "iter/sec",
            "range": "stddev: 3.639168021690686e-7",
            "extra": "mean: 7.166063434648674 usec\nrounds: 24876"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1-100]",
            "value": 7985.89289409807,
            "unit": "iter/sec",
            "range": "stddev: 0.000012800438070993771",
            "extra": "mean: 125.22081290860343 usec\nrounds: 6120"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-100]",
            "value": 154.67828139873376,
            "unit": "iter/sec",
            "range": "stddev: 0.00005583058986743461",
            "extra": "mean: 6.465031748201117 msec\nrounds: 139"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[100-500]",
            "value": 31.945458525256655,
            "unit": "iter/sec",
            "range": "stddev: 0.00036553501282822633",
            "extra": "mean: 31.303354096776605 msec\nrounds: 31"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-100]",
            "value": 15.764092748166377,
            "unit": "iter/sec",
            "range": "stddev: 0.000161405602573169",
            "extra": "mean: 63.43530299999767 msec\nrounds: 16"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_request[1000-500]",
            "value": 3.2310974925780296,
            "unit": "iter/sec",
            "range": "stddev: 0.00010658604876540962",
            "extra": "mean: 309.4923635999976 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-1]",
            "value": 1609471.128325122,
            "unit": "iter/sec",
            "range": "stddev: 2.3440184575199967e-8",
            "extra": "mean: 621.3221115938591 nsec\nrounds: 76331"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1-10]",
            "value": 823706.5122971744,
            "unit": "iter/sec",
            "range": "stddev: 5.5547802376920985e-8",
            "extra": "mean: 1.2140246375024688 usec\nrounds: 200000"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-1]",
            "value": 153357.86923327952,
            "unit": "iter/sec",
            "range": "stddev: 3.568757779590899e-7",
            "extra": "mean: 6.520695709972699 usec\nrounds: 100000"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[100-10]",
            "value": 36484.55021976482,
            "unit": "iter/sec",
            "range": "stddev: 6.947178712828683e-7",
            "extra": "mean: 27.4088619422878 usec\nrounds: 30212"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-1]",
            "value": 19333.327324661906,
            "unit": "iter/sec",
            "range": "stddev: 8.144111269177796e-7",
            "extra": "mean: 51.72415400655756 usec\nrounds: 14389"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_proto_response[1000-10]",
            "value": 3421.1506786673667,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036100957645203127",
            "extra": "mean: 292.2993150332472 usec\nrounds: 2714"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-1]",
            "value": 139341.35917996927,
            "unit": "iter/sec",
            "range": "stddev: 4.528396611216405e-7",
            "extra": "mean: 7.176620106801377 usec\nrounds: 34844"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1-10]",
            "value": 53337.166233358934,
            "unit": "iter/sec",
            "range": "stddev: 7.200635981604766e-7",
            "extra": "mean: 18.74865259291869 usec\nrounds: 22832"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-1]",
            "value": 7122.925897914054,
            "unit": "iter/sec",
            "range": "stddev: 0.000001796281411672939",
            "extra": "mean: 140.3917455175056 usec\nrounds: 5187"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[100-10]",
            "value": 1537.5189367475334,
            "unit": "iter/sec",
            "range": "stddev: 0.000011159118076685275",
            "extra": "mean: 650.3984933775185 usec\nrounds: 1208"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-1]",
            "value": 668.0181124767246,
            "unit": "iter/sec",
            "range": "stddev: 0.000014442166410529694",
            "extra": "mean: 1.4969653985764384 msec\nrounds: 562"
          },
          {
            "name": "test/benchmark_upi_test.py::test_serialize_json_response[1000-10]",
            "value": 138.56393029914852,
            "unit": "iter/sec",
            "range": "stddev: 0.00005633605000120478",
            "extra": "mean: 7.216885360000106 msec\nrounds: 125"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-1]",
            "value": 1169712.820025004,
            "unit": "iter/sec",
            "range": "stddev: 1.3200351542127836e-7",
            "extra": "mean: 854.9106950699233 nsec\nrounds: 181819"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1-100]",
            "value": 128070.45968756807,
            "unit": "iter/sec",
            "range": "stddev: 4.729133945677958e-7",
            "extra": "mean: 7.808201847947854 usec\nrounds: 90910"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-100]",
            "value": 4160.837144313906,
            "unit": "iter/sec",
            "range": "stddev: 0.000002781938448044005",
            "extra": "mean: 240.33625093127583 usec\nrounds: 3758"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[100-500]",
            "value": 897.1962062890118,
            "unit": "iter/sec",
            "range": "stddev: 0.000007933517870034838",
            "extra": "mean: 1.1145834021481273 msec\nrounds: 838"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-100]",
            "value": 427.31697081381554,
            "unit": "iter/sec",
            "range": "stddev: 0.000011461584354569084",
            "extra": "mean: 2.3401832089549885 msec\nrounds: 402"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_request[1000-500]",
            "value": 82.96840700156169,
            "unit": "iter/sec",
            "range": "stddev: 0.00011070598978573184",
            "extra": "mean: 12.052780523810435 msec\nrounds: 84"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-1]",
            "value": 178503.41461940864,
            "unit": "iter/sec",
            "range": "stddev: 3.7333065645771884e-7",
            "extra": "mean: 5.602133730226527 usec\nrounds: 40649"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1-100]",
            "value": 12745.994149323968,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016819639162290685",
            "extra": "mean: 78.45602220467352 usec\nrounds: 8827"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-100]",
            "value": 248.69324555088346,
            "unit": "iter/sec",
            "range": "stddev: 0.0032738186696683203",
            "extra": "mean: 4.021017932292 msec\nrounds: 192"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[100-500]",
            "value": 50.10370590307018,
            "unit": "iter/sec",
            "range": "stddev: 0.005326305773814867",
            "extra": "mean: 19.958603500000255 msec\nrounds: 38"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-100]",
            "value": 17.835434903436166,
            "unit": "iter/sec",
            "range": "stddev: 0.011929330611509265",
            "extra": "mean: 56.06815899999952 msec\nrounds: 18"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_request[1000-500]",
            "value": 3.6009658331949583,
            "unit": "iter/sec",
            "range": "stddev: 0.01967621156976766",
            "extra": "mean: 277.7032736000024 msec\nrounds: 5"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-1]",
            "value": 1178922.0369765824,
            "unit": "iter/sec",
            "range": "stddev: 5.360706222109585e-8",
            "extra": "mean: 848.2325112562097 nsec\nrounds: 178572"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1-10]",
            "value": 513639.5557046923,
            "unit": "iter/sec",
            "range": "stddev: 1.3617981413210477e-7",
            "extra": "mean: 1.9468905556310616 usec\nrounds: 142858"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-1]",
            "value": 135388.06233094045,
            "unit": "iter/sec",
            "range": "stddev: 3.502289690538068e-7",
            "extra": "mean: 7.3861755813863095 usec\nrounds: 87720"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[100-10]",
            "value": 32047.542015912077,
            "unit": "iter/sec",
            "range": "stddev: 7.463026434515193e-7",
            "extra": "mean: 31.203641124910153 usec\nrounds: 24039"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-1]",
            "value": 17364.53760573879,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013503741818797043",
            "extra": "mean: 57.58863395645565 usec\nrounds: 14389"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_proto_response[1000-10]",
            "value": 3444.231523877475,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031950330851817038",
            "extra": "mean: 290.3405282331926 usec\nrounds: 3294"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-1]",
            "value": 178819.12576797232,
            "unit": "iter/sec",
            "range": "stddev: 3.1008157340101395e-7",
            "extra": "mean: 5.59224297571813 usec\nrounds: 45663"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1-10]",
            "value": 82919.77537823422,
            "unit": "iter/sec",
            "range": "stddev: 4.298555856683224e-7",
            "extra": "mean: 12.059849359679912 usec\nrounds: 36232"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-1]",
            "value": 11285.899397265322,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026674946992140095",
            "extra": "mean: 88.60614159313782 usec\nrounds: 904"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[100-10]",
            "value": 2316.973233271067,
            "unit": "iter/sec",
            "range": "stddev: 0.0008010346366680186",
            "extra": "mean: 431.59756256148694 usec\nrounds: 2030"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-1]",
            "value": 640.8526708971548,
            "unit": "iter/sec",
            "range": "stddev: 0.004672177040420618",
            "extra": "mean: 1.5604210537190406 msec\nrounds: 968"
          },
          {
            "name": "test/benchmark_upi_test.py::test_deserialize_json_response[1000-10]",
            "value": 143.53526140537184,
            "unit": "iter/sec",
            "range": "stddev: 0.009643488171163119",
            "extra": "mean: 6.966929172726436 msec\nrounds: 220"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1-1]",
            "value": 3202.476520443859,
            "unit": "iter/sec",
            "range": "stddev: 0.000027262200679786934",
            "extra": "mean: 312.25833932465525 usec\nrounds: 1836"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-10]",
            "value": 355.65655621849345,
            "unit": "iter/sec",
            "range": "stddev: 0.00004689590018093972",
            "extra": "mean: 2.811701295858192 msec\nrounds: 338"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[100-100]",
            "value": 47.8010257365839,
            "unit": "iter/sec",
            "range": "stddev: 0.000164244230719925",
            "extra": "mean: 20.92005317021184 msec\nrounds: 47"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-10]",
            "value": 95.93505758593787,
            "unit": "iter/sec",
            "range": "stddev: 0.00008421183494313438",
            "extra": "mean: 10.42371813978647 msec\nrounds: 93"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[500-100]",
            "value": 11.883396939108945,
            "unit": "iter/sec",
            "range": "stddev: 0.010158417898723342",
            "extra": "mean: 84.15102223076823 msec\nrounds: 13"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-10]",
            "value": 47.738268830633096,
            "unit": "iter/sec",
            "range": "stddev: 0.00020425876885192616",
            "extra": "mean: 20.947554750001984 msec\nrounds: 48"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_df_to_table[1000-100]",
            "value": 6.369544747553866,
            "unit": "iter/sec",
            "range": "stddev: 0.00046264758675279653",
            "extra": "mean: 156.99709157142448 msec\nrounds: 7"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1-1]",
            "value": 4257.419427506365,
            "unit": "iter/sec",
            "range": "stddev: 0.000007015880199380612",
            "extra": "mean: 234.8840693353333 usec\nrounds: 2798"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-10]",
            "value": 799.5612912714042,
            "unit": "iter/sec",
            "range": "stddev: 0.000022402015247014754",
            "extra": "mean: 1.250685858503571 msec\nrounds: 735"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[100-100]",
            "value": 117.2646500704292,
            "unit": "iter/sec",
            "range": "stddev: 0.00011539862780353425",
            "extra": "mean: 8.527719132742899 msec\nrounds: 113"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-10]",
            "value": 234.5867912569653,
            "unit": "iter/sec",
            "range": "stddev: 0.000015083680664158428",
            "extra": "mean: 4.262814605382468 msec\nrounds: 223"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[500-100]",
            "value": 30.997633268704426,
            "unit": "iter/sec",
            "range": "stddev: 0.00026562767762251013",
            "extra": "mean: 32.260527483871215 msec\nrounds: 31"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-10]",
            "value": 123.56534103370875,
            "unit": "iter/sec",
            "range": "stddev: 0.00004069740625842579",
            "extra": "mean: 8.09288423140595 msec\nrounds: 121"
          },
          {
            "name": "test/benchmark_utils_test.py::test_benchmark_table_to_df[1000-100]",
            "value": 15.67967015587305,
            "unit": "iter/sec",
            "range": "stddev: 0.0005821797413263737",
            "extra": "mean: 63.77685181250037 msec\nrounds: 16"
          }
        ]
      }
    ]
  }
}