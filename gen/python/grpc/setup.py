from setuptools import setup, find_packages  # noqa: H301

NAME = "caraml-upi-protos"
VERSION = "0.0.3"

REQUIRES = [
  "grpcio-tools >= 1.38.1",
  "googleapis-common-protos >= 1.52.0",
]

TEST_REQUIRES = [
  "pytest == 7.1.2"
]

setup(
    name=NAME,
    version=VERSION,
    description="Generated Python code from caraml-dev/universal-prediction-interface",  
    author="CaraML Developer",
    author_email="dsp@gojek.com",
    url="",
    keywords=["caraml", "upi", "grpc", "protobuf", "stub"],
    python_requires=">=3.6",
    install_requires=REQUIRES,
    extras_require={ "test": TEST_REQUIRES },
    packages=find_packages(exclude=["test"]),
    long_description=open("README.md").read(),
    long_description_content_type='text/markdown',
)
