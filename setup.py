import setuptools

setuptools.setup(
    name="PythonFileGenerator",
    license='Apache Software License 2.0',
    version="0.0.4",
    classifiers=[
        'Development Status :: 2 - Pre-Alpha',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: Apache Software License',
        'Natural Language :: English',
        'Programming Language :: Python :: 3.8'],
    include_package_data=True,
    data_files=[
        # like `jupyter nbextension install --sys-prefix`
        ("share/jupyter/nbextensions/python-gen", [
            "python-gen/static/index.js",
        ]),
        # like `jupyter nbextension enable --sys-prefix`
        ("etc/jupyter/nbconfig/notebook.d", [
            "jupyter-config/nbconfig/notebook.d/python_gen.json"
        ]),
        # like `jupyter serverextension enable --sys-prefix`
        ("etc/jupyter/jupyter_notebook_config.d", [
            "jupyter-config/jupyter_notebook_config.d/python_gen.json"
        ])
    ],
    install_requires = 'nbdev>=0.0.1',
    python_requires  = '>=3.8',
    url="https://github.com/nareshr8/python-gen",
    description='''A Jupyter Notebook extension to generate Python files''',
    long_description='''A Jupyter Notebook extension to generate Python files''',
    zip_safe=False
)