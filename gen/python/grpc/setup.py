import os

from setuptools import setup, find_packages  # noqa: H301
from importlib.machinery import SourceFileLoader


NAME = "caraml-upi-protos"
VERSION =  SourceFileLoader("caraml.upi.version", os.path.join("caraml", "upi", "version.py")).load_module().VERSION

REQUIRES = [
  "grpcio-tools >= 1.21.1",
  "googleapis-common-protos >= 1.50.0",
]

TEST_REQUIRES = [
  "pytest == 7.1.2",
  "pytest-benchmark == 3.4.1",
  "pandas"
]

setup(
    name=NAME,
    version=VERSION,
    description="Generated Python code from caraml-dev/universal-prediction-interface",  
    author="CaraML Developer",
    author_email="dsp@gojek.com",
    url="",
    keywords=["caraml", "upi", "grpc", "protobuf", "stub"],
    python_requires=">=3.7",
    install_requires=REQUIRES,
    extras_require={ "test": TEST_REQUIRES },
    packages=find_packages(exclude=["test"]),
    package_data={"caraml.upi.v1": ["*.pyi"]},
    long_description=open("README.md").read(),
    long_description_content_type='text/markdown',
)
