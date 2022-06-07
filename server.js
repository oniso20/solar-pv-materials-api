const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

app.get('/api/:materialName', (request, response) => {
const materialsName = request.params.materialName.toLowerCase()
 if (solarPVMaterials[materialsName]){
    response.json(solarPVMaterials[materialsName] || solarPVMaterials)
    }else {
    response.json(solarPVMaterials['unknown'])
    }
})

const solarPVMaterials = {
    'ag': {
      'technologies' : ['c-Si'],
      'fullName' : 'Silver',
      'type' : 'Precious metal',
      'atomicNr' : 47,
      'c-Si' : {
        'wtPercentage' : {
          'Ecoinvent' : 0.0577,
          'IRENA-IEAPVPS-2016' : 0.1,
          'Paiano-2015' : 0.006,
          'Dubey-2012' : 0.006,
          'Peeters-2017' : 0.1239
        }
      }
        },
    'te': {
      'technologies' : ['a-Si', 'CdTe'],
      'fullName' : 'Tellurium',
      'type' : 'Critical metal',
      'atomicNr' : 52,
      'a-Si' : {
        'wtPercentage' : {
          'Domínguez-2017' : 0.00642,
          'Mahmoudi-2019' : 0.00642
        }
      },
      'CdTe' : {
        'wtPercentage' : {
          'Domínguez-2017' : 0.12,
          'Mahmoudi-2019' : 0.12,
          'Paiano-2015' : 0.07
        }
      }
        },
    'al': {
      'technologies' : ['c-Si', 'a-Si', 'CdTe', 'CIS/CIGS'],
      'fullName' : 'Aluminium',
      'type' : 'Metal',
      'atomicNr' : 13,
      'c-Si' : {
        'wtPercentage' : {
          'Domínguez-2017' : 16.5,
          'Mahmoudi-2019' : 16.5,
          'Paiano-2015' : 10.3,
          'Dubey-2012' :10,
          'IRENA-IEAPVPS-2016' : 8
        }
      },
      'a-Si' : {
        'wtPercentage' : {
          'Domínguez-2017' : 41.6,
          'Mahmoudi-2019' : 41.6,
          'Paiano-2015' : 0.035,
          'IRENA-IEAPVPS-2016' : 15
        }
      },
      'CdTe' : {
        'wtPercentage' : {
          'Domínguez-2017' : 0.0904,
          'Mahmoudi-2019' : 0.0904,
          'Paiano-2015' : 0.35
        }
      },
      'CIS/CIGS' : {
        'wtPercentage' : {
          'Domínguez-2017' : 8.58,
          'Mahmoudi-2019' : 8.58,
          'Paiano-2015' : 12,
          'IRENA-IEAPVPS-2016' : 7
        }
      }
        },
    'cu': {
      'technologies' : ['c-Si', 'a-Si', 'CdTe', 'CIS/CIGS'],
      'fullName' : 'Copper',
      'type' : 'Metal',
      'atomicNr' : 29,
      'c-Si' : {
        'wtPercentage' : {
          'Domínguez-2017' : 0.731,
          'Mahmoudi-2019' : 0.731,
          'Paiano-2015' : 0.57,
          'Dubey-2012' :0.6,
          'IRENA-IEAPVPS-2016' : 1
        }
      },
      'a-Si' : {
        'wtPercentage' : {
          'Domínguez-2017' : 0.899,
          'Mahmoudi-2019' : 0.899,
          'Paiano-2015' : 0.9
        }
      },
      'CdTe' : {
        'wtPercentage' : {
          'Domínguez-2017' : 3.01,
          'Mahmoudi-2019' : 3.01,
          'Paiano-2015' : 1
        }
      },
      'CIS/CIGS' : {
        'wtPercentage' : {
          'Domínguez-2017' : 0.284,
          'Mahmoudi-2019' : 0.284,
          'Paiano-2015' : 0.8,
          'IRENA-IEAPVPS-2016' : 1
        }
      }
        },
    'cd': {
      'technologies' : ['a-Si', 'CdTe', 'CIS/CIGS'],
      'fullName' : 'Cadmium',
      'type' : 'Toxic metal',
      'atomicNr' : 48,
      'a-Si' : {
        'wtPercentage' : {
          'Domínguez-2017' : 0.00513,
          'Mahmoudi-2019' : 0.00513
        }
      },
      'CdTe' : {
        'wtPercentage' : {
          'Domínguez-2017' : 0.12,
          'Mahmoudi-2019' : 0.12,
          'Paiano (2015)' : 0.07
        }
      },
      'CIS/CIGS' : {
        'wtPercentage' : {
          'Paiano (2015)' : 0.0005
        }
      }
        },
    'unknown': {
        'technologies' : ['unknown'],
        'fullName' : 'unknown',
        'type' : 'unknown',
        'atomicNr' : 0,
            },
  }

app.listen(process.env.PORT || PORT, () =>{
	console.log(`The server is running on port ${PORT}! You better go catch it!`)
})