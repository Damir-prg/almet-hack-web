<style>
.code{
    color: green;
    font-family: 'Lucida Console', monospace, sans-serif;
    background-color: #2e3136
}</style>

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
                <li><span class="code">php artisan migrate --seed</span> (It migrate all tables to database)</li>
                <li><span class="code">php artisan serve</span> (Run Laravel app)</li>
            </ul>
        </li>
    </ul>
</h2>