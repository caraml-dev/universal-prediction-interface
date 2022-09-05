window.BENCHMARK_DATA = {
  "lastUpdate": 1662353999818,
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
      }
    ]
  }
}