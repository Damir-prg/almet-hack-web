<h1>Installation AlmetHack Server.</h1>
<h2>
    <ul>
        <li>
            Firstly, install PHP version 8.0
        </li>
        <li>
            Add to PATH Environment PHP
        </li>
        <li>
            Open directory <span style="text-decoration: underline">almethack_backend</span> and change the settings in the file <span style="text-decoration: underline;">.env</span>
        </li>
        <li>
            Activate local or other MySQL database server 
        </li>
        <li>
            Use this commands:
            <ul>
                <li><span>**php artisan migrate --seed**</span> (It migrate all tables to database)</li>
                <li><span>**php artisan serve**</span> (Run Laravel app)</li>
            </ul>
            <br> PS. (Laravel app is runned by default port: 8000)
        </li>
    </ul>
</h2>

<h1>How to use API</h1>

<h2>
    <ul>
        <li>
            <h3>Events. Method: GET.</h3>
            <ul>
                <li><span>**/events/**</span>.<br> Get all Events on DataBase.</li><br>
                <li><span>**/events/get/{id}**</span>. <br> Get Event on DataBase with id.</li><br>
            </ul>
        </li>
        <li>
            <h3>Admins. Method: POST.</h3>
            <ul>
                <li>
                    <h4>Admin add, delete and authorization.</h4>
                    <ul>
                        <li><span>**/admin/add/**</span>.<br> Add admin, args: login, password, name, api_token.</li><br>
                        <li><span>**/admin/delete/**</span>.<br> Delete admin, args: login, api_token.</li><br>
                        <li><span>**/admin/auth/**</span>.<br> Authorize admin, args: login, password. Return: id, api_token</li><br>
                    </ul>
                </li>
                <li>
                    <h4>Application add, get, delete.</h4>
                    <ul>
                        <li><span>**/admin/add/application/**</span>.<br> Add Application, args: type, name, preview, description, date, time, place, price, full_name, organization_name, phone.</li><br>
                        <li><span>**/admin/get/applications/**</span>.<br> Get all Applications on DataBase, args: api_token.</li><br>
                        <li><span>**/admin/get/applications/{id}**</span>.<br> Get Application on DataBase with id, args: api_token, id.</li><br>
                        <li><span>**/admin/delete/applications/{id}**</span>.<br> Delete Application on DataBase with id, args: api_token, id.</li><br>
                    </ul>
                </li>
                <li>
                    <h4>The Application was sent correctly and approved.</h4>
                    <ul>
                        <li><span>**/admin/add/events/**</span>.<br> Args: type, name, preview, description, date, time, place, price, full_name, organization_name, phone, api_token.</li><br>
                    </ul>
                </li>
            </ul>
            <h5>PS. Api_token has only administrator.</h5>
        </li>
    </ul>
</h2>
